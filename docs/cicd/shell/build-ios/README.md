---
title: iOS打包测试
date: 2020-02-03
sidebar: 'auto'
categories:
 - 持续集成
tags:
 - iOS
 - shell
publish: true
---

## 导语

在开发过程中，经常需要打包给QA进行测试。这种重复性高的工作，我通过脚本的方式实现。让QA在配置好的电脑上面执行脚本，即可实现打包测试。美滋滋！

## 项目背景

#### Mac

项目跟脚本都是在Mac系统上执行的；

#### bash

脚本语言使用的是bash，所以需要电脑支持bash脚本的执行。Mac系统默认支持！

#### React-Native

项目是使用 React-Native 框架开发的，所以脚本中有部分代码是针对 RN 的；

## 打包前准备

#### 配置证书

#### 项目编译成功

#### 蒲公英生成应用

## 打包流程

#### 生成 exportOptions plist 文件

exportOptions配置文件为使用xcode导包的配置项；

配置项说明：

1. ``` provisioningProfiles ``` App bundle ID 为key，mobileprovision 的文件名作为 value；
2. ``` method ``` 决定导出包的类型，包括：app-store、ad-hoc、package、enterprise、development、developer-id、and mac-application；
3. ``` teamID ``` 开发者ID，可在 keychain 或者登录开发者网站中查看；

![](https://user-gold-cdn.xitu.io/2019/7/6/16bc7d2433ee5123?w=1992&h=1520&f=jpeg&s=277802)

#### 更新代码

```bash
git pull
yarn install
yarn link
```

#### 清除缓存

```bash
# 使用 Cocoapods
xcodebuild clean -workspace <workspace_path>  -scheme <app_scheme> -configuration <Debug Or Release>

# 不使用 Cocoapods
xcodebuild clean -project <project_path>  -scheme <app_scheme> -configuration <Debug Or Release>
```

代码说明：

1. ``` <workspace_path> ``` 项目.xcworkspace的绝对路径；
2. ``` <project_path> ``` 项目.xcodeproj的绝对路径；
3. ``` <app_scheme> ``` 项目App的scheme (非Extension App)；
4. ``` <Debug Or Release> ``` 编译环境，Debug Or Release；

App的scheme必须跟项目中 Manager Schemes 中的 Scheme name 一致；

![](https://user-gold-cdn.xitu.io/2019/7/6/16bc7d7d0d97d297?w=3256&h=2204&f=png&s=1284315)

#### 开始编译

```bash
# 使用 Cocoapods
xcodebuild archive -workspace <workspace_path> -scheme <app_scheme> -archivePath <xcarchive_path>

# 不使用 Cocoapods
xcodebuild archive -project <project_path> -scheme <app_scheme> -archivePath <xcarchive_path>
```

代码说明：

1. ``` <workspace_path> ``` 同上；
2. ``` <project_path> ``` 同上；
3. ``` <app_scheme> ``` 同上；
4. ``` <xcarchive_path> ``` 导出 achive 文件路径；

#### 导出 ipa 包

```bash
xcodebuild -exportArchive -archivePath <xcarchive_path> -exportPath <export_ipa_path> -exportOptionsPlist <exportOptionsPlist_path>
```

代码说明：

1. ``` <xcarchive_path> ``` achive文件路径；
2. ``` <export_ipa_path> ``` ipa文件导出路径；
3. ``` <exportOptionsPlist_path> ``` 导包配置plist文件；

#### 上传到蒲公英

```bash
curl -F "file=@{$filePath}" \
-F "uKey={$uKey}" \
-F "_api_key={$apiKey}" \
https://www.pgyer.com/apiv1/app/upload
```

代码说明：

1. ``` {$filePath} ``` 是应用安装包文件的路径；
2. ``` {$uKey} ``` 是开发者的用户 Key，在应用管理-API中查看；
3. ``` {$apiKey} ``` 是开发者的 API Key，在应用管理-API中查看；

如果上传成功，接口会以 JSON 格式返回应用的详细信息。如果上传失败，则会返回相应的错误信息。

## 完整代码

```shell
#!/bin/sh

# echo "\033[42;37m ~~~~~~~~~~~~~~~~ 开始执行脚本 ~~~~~~~~~~~~~~~~ \033[0m" 

#------------------------- 脚本配置信息 --------------------------------------------

# 工程目录
BASE_PROJECT=''

# 工程名称
PROJECT_NAME=""

# 编译模式，默认有 Debug Release
CONFIGURATION_TARGET=Release

# 编译路径
BUILDPATH=~/Desktop

# 导出ipa 所需plist
ADHOCExportOptionsPlist=~/exportOptions.plist

# archivePath
ARCHIVEPATH=${BUILDPATH}/${PROJECT_NAME}/${PROJECT_NAME}.xcarchive

# ipa 存放路径
IPAPATH=${BUILDPATH}/ipa_$(date +%F-%T)

# 蒲公英 key
uKey=""

# 蒲公英 apiKey
apiKey=""

# 蒲公英下载地址
DOWNLOAD_PATH=""

# #------------------------- 判断文件/目录是否存在 --------------------------------------------

if [ ! -d ${BASE_PROJECT} ];
then
    echo "\033[31m ${BASE_PROJECT} 路径不存在，请检查! \033[0m" 
    exit 1
elif [ ! -d ${BASE_PROJECT}/ios ];
then
    echo "\033[31m ${BASE_PROJECT}/ios 路径不存在，请检查! \033[0m" 
    exit 1
elif [ ! -f ${ADHOCExportOptionsPlist} ];
then
    echo "\033[31m${ADHOCExportOptionsPlist} 文件不存在，请检查! \033[0m" 
    exit 1
fi

#------------------------- 判断证书是否正确设置 --------------------------------------------



echo "\033[42;37m ~~~~~~~~~~~~~~~~ 更新代码 ~~~~~~~~~~~~~~~~ \033[0m"

cd ${BASE_PROJECT}
# git checkout dev
# git pull origin dev
# npm install
# react-native link

echo "\033[42;37m ~~~~~~~~~~~~~~~~ 清除缓存 ~~~~~~~~~~~~~~~~ \033[0m"

cd ./ios
watchman watch-del-all
# npm start -- --reset-cache
xcodebuild clean -project ${PROJECT_NAME}.xcodeproj -scheme ${PROJECT_NAME} -configuration ${CONFIGURATION_TARGET}

echo "\033[42;37m ~~~~~~~~~~~~~~~~ 开始编译 ~~~~~~~~~~~~~~~~ \033[0m"

xcodebuild archive -project ${PROJECT_NAME}.xcodeproj -scheme ${PROJECT_NAME} -archivePath ${ARCHIVEPATH} -configuration ${CONFIGURATION_TARGET}

#------------------------- 判断编辑是否成功 --------------------------------------------

if [ ! -d "$ARCHIVEPATH" ]
then
    echo "\033[31m 编译失败! \033[0m" 
    exit 1
fi

echo "\033[42;37m ~~~~~~~~~~~~~~~~ 导出ipa ~~~~~~~~~~~~~~~~ \033[0m"

xcodebuild -exportArchive -archivePath ${ARCHIVEPATH} -exportPath ${IPAPATH} -exportOptionsPlist ${ADHOCExportOptionsPlist}

#------------------------- 判断导出是否成功 --------------------------------------------

if [ ! -d "$IPAPATH" ]
then
    echo "\033[31m 导出ipa失败! \033[0m" 
    exit 1
fi

echo "\033[42;37m ~~~~~~~~~~~~~~~~ 上传到蒲公英 ~~~~~~~~~~~~~~~~ \033[0m"

curl -F "file=@$IPAPATH/${PROJECT_NAME}.ipa" \
-F "uKey=$uKey" \
-F "_api_key=$apiKey" \
http://www.pgyer.com/apiv1/app/upload

#------------------------- 浏览器打开下载地址 --------------------------------------------

open -a "/Applications/Safari.app" ${DOWNLOAD_PATH}

echo "\033[42;37m ~~~~~~~~~~~~~~~~ 打包成功 ~~~~~~~~~~~~~~~~ \033[0m"

exit 1
```

## 打包过程遇到的问题

#### 执行脚本报错：Permission denied

```bash
# 解决方法：
chmod 777 文件路径
```

## 参考资料
> 1. [Xcode命令行脚本打包；](https://www.jianshu.com/p/36d67d7d6985)
> 2. [蒲公英：使用一条命令快速上传应用；](https://www.pgyer.com/doc/view/upload_one_command)
> 3. [Building from the Command Line with Xcode FAQ](https://developer.apple.com/library/archive/technotes/tn2339/_index.html#//apple_ref/doc/uid/DTS40014588-CH1-WHAT_IS_THE_COMMAND_LINE_TOOLS_PACKAGE_)