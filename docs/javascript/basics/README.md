---
title: JavaScript中的数据类型
date: 2020-09-12
sidebar: 'auto'
categories:
 - JavaScript
tags:
 - JavaScript基础
publish: true
---

## 1. JS中的数据类型：

#### 1.1 基本数据类型

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `Symbol`
- `bigint`

#### 1.2 引用数据类型

- `object`
- `function`

> 每一个函数的`__proto__`指向的是`Function.prototype`，所以`function`应该是一种独立的数据类型

## 2. 数据类型检测

- `typeof` 检测数据类型的逻辑运算符
- `instanceof` 检测是否为某个类的实例
- `constructor` 检测构造函数
- `Object.prototype.toString.call` 检测数据类型

#### 2.1 `typeof [value]` 语法特点
- 返回当前值的数据类型
- 返回的结果是一个字符串

#### 2.2 `typeof [value]` 缺点
- `typeof null`的结果是`"object"`
- `typeof`不能具体细分对象类型

```JavaScript
typeof null // result => "object"

typeof 123 // result => "number"

typeof undefined // result => "undefined"

typeof Symbol // result => "function"

typeof Symbol(1) // result => "symbol"

typeof [] // result => "object"

typeof {} // result => "object"

typeof true // result => "boolean"
```

## 3. Number

#### 3.1 `number`类型的数据包括：
- `NaN`
- `isNaN`
- `Infinity`
- `parseInt`
- `parseFloat`
- `Number()`

#### 3.2 `NaN`
- `NaN`不是一个有效数字，和谁都不相等，包括和自身也不相等
- `isNaN(value)` 检测这个值是否属于无效数字

```JavaScript
NaN == NaN // result => false

isNaN() // result => true

isNaN(NaN) // result => true

isNaN(undefined) // result => true

isNaN('name') // result => true

isNaN('123px') // result => true

isNaN({}) // result => true
```

#### 3.3 `parseInt(string)`
- 函数解析一个字符串参数（必要时先转换为字符串）并返回一个整数
- 从字符串左侧开始查找有效数字字符，如果遇到非有效数字字符就停止查找
- 如果处理的值不是字符串，需要先转换成字符串再开始查找

#### 3.4 `parseFloat(string)`
- 函数解析一个字符串参数（必要时先转换为字符串）并返回一个浮点数
- 如果参数字符串的第一个字符不能被解析成为数字,则返回`NaN`
- 参数首位和末位的空白符会被忽略

```JavaScript
let result = parseFloat('left:200px') // result => NaN
if (result == 200) {
    console.log(200)
} else if (result == NaN) {
    console.log('NaN')
} else if (typeof result == 'number') {
    console.log('number')
} else {
    console.log('Invalid  number')
}

// 输出结果：number
```

#### 3.5 其他数据类型转换成数字的方法：
- 强转换（基于底层机制转换）`Number([value])`
- 弱转换（给予一些额外的方法转换）`parseInt([value])`/`parseFloat([value])`

#### 3.6 `Number()`函数的特点：
- 直接调用浏览器最低层的数据类型检测机制来完成
- 字符串中必须保证都是有效数字才会转换成数字，否则都是`NaN`

#### 3.7 `Number()`的隐式转换：
- `isNaN('12px')`先把其他类型值转换成数字再检测
- `'name'=123`，两个等号比较的时候也要将其他值转成数字
- 数学运算`'12px'-13`

```JavaScript
parseInt('') // result => NaN

Number('') // result => 0

isNaN('') // result => false

parseInt(null) // 将非字符串值转成字符串 parseInt('null') => NaN

Number(null) // result => 0

isNaN(null) // 触发Number隐式转换 isNaN(Number(null)) => isNaN(0) => false

parseInt('12px') // result => 12

Number('12px') // result => NaN

isNaN('12px') // 触发Number隐式转换 isNaN(Number('12px')) => isNaN(NaN) => true

parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null)
// 1.6 + 1 + typeof parseInt('null') => 2.6 + typeof NaN => 2.6 + 'number' => 2.6number

isNaN(Number(!!Number(parseInt('0.8'))))
// isNaN(Number(!!Number(0))) => isNaN(Number(!!0)) => isNaN(Number(false)) => isNaN(0) => false

typeof !parseInt(null) + !isNaN(null)
// typeof !parseInt('null') + !isNaN(Number(null)) => typeof !NaN + !isNaN(0) => typeof true + !false => 'boolean' + true => 'booleantrue'
```

## 4. 等号和（=）加号（+）

等号对比：
- 对象==字符串，对象转换成字符串
- null==undefined，但是和其他值都不相等
- 剩下两边不同都是转换成数字对比

加号的作用：
- 数学运算
- 字符串拼接