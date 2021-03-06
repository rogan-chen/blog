---
title: OSI七层模型
date: 2020-08-11
sidebar: 'auto'
categories:
 - 网络协议
tags:
 - OSI七层模型
publish: true
---

## 1. 协议的概念和作用

- 为了让计算机能够通信，计算机需要定义通信规则，这些规则就是协议
- 规则是多种，协议也有多种
- 协议就是数据封装格式+传输

#### 1.1 OSI七层模型

- 分工带来效能
- 将复杂的流程分解为几个功能相对单一的子进程
- 整个流程更加清晰，复杂问题简单化
- 更容易发现问题并针对性的解决问题
    - `应用层(Application)` 提供网络与用户应用软件之间的**接口服务**
    - `表示层(Presentation)` 提供格式化的表示和转换数据服务，如**加密和压缩**
    - `会话层(Session)` 提供包括访问验证和会话管理在内的建立和维护**应用之间通信**的机制
    - `传输层(Transimission)` 提供建立、维护和取消传输连接功能，负责**可靠地传输数据**(PC)
    - `网络层(Network)` 处理网络间**路由**，确保数据及时传送(**路由器寻址**)
    - `数据链路层(DataLink)` 负责无错传输数据，确认帧、发错重传等(交换机)
    - `物理层(Physics)` 提供机械、电气、功能和过程特性(网卡、网线、双绞线、同轴电缆、中继器)

| 分层       | 功能                                           |
| :--------- | :--------------------------------------------- |
| 应用层     | 网络服务与最终用户的一个接口                   |
| 表示层     | 数据的表示、安全、压缩                         |
| 会话层     | 建立、管理、中止会话                           |
| 传输层     | 定义传输数据的协议端口号、以及流控和差错校验   |
| 网络层     | 进行逻辑地址寻址，实现不同网络之间的路径选择   |
| 数据链路层 | 建立逻辑连接、进行硬件地址选址、差错校验等功能 |
| 物理层     | 建立、维护、断开物理连接                       |

#### 1.2 封装过程

数据包的拆解过程：

![封装过程](/program-basic/19.receive.png)

## 2. TCP/IP参考模型

- TCP/IP是传输控制协议/网络互联协议的简称
- 早期的TCP/IP模型是一个四层结构，从下往上依次是网络接口层、互联网层、传输层和应用层
- 后来在使用过程中，借鉴OSI七层参考模型，将网络接口层划分为了物理层和数据链路层，形成五层结构

![TCP/IP参考模型](/program-basic/20.reveive.jpeg)

#### 2.1 协议的概念和作用

- 为了让计算机能够通信，计算机需要定义通信规则，这些规则就是协议
- 规则是多种，协议也有多种
- 协议就是数据封装格式+传输

#### 2.2 常用协议

- TCP/IP协议被称为传输控制协议/互联网协议，又称网络通讯协议
- 是由网络层的IP协议和传输层的TCP协议组成，是一个很大的协议集合
- 物理层和数据链路层没有定义任何特定协议，支持所有的标准和专用的协议

![网络协议](/program-basic/protocal.png)

| 层级   | 名称 | 含义                                                                                                                                                                                     |
| :----- | :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 应用层 | HTTP | 超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议                                                                                                   |
| 应用层 | DNS  | 域名系统（英文：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。                                          |
| 传输层 | TCP  | TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议                                                                                    |
| 传输层 | UDP  | UDP 是User Datagram Protocol的简称， 中文名是用户数据报协议，是OSI（Open System Interconnection，开放式系统互联） 参考模型中一种无连接的传输层协议，提供面向事务的简单不可靠信息传送服务 |
| 网络层 | IP   | 互联网协议地址（英语：Internet Protocol Address，又译为网际协议地址），缩写为IP地址（英语：IP Address），是分配给用户上网使用的网际协议（英语：Internet Protocol, IP）的设备的数字标签   |
| 网络层 | ARP  | 地址解析协议，即ARP（Address Resolution Protocol），是根据IP地址获取物理地址的一个TCP/IP协议                                                                                             |






























































