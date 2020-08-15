---
title: Vue小结
date: 2020-08-15
sidebar: 'auto'
categories:
 - Vue
tags:
 - Vue
publish: true
---

## 组件

#### 组件特点

- 复用 方便维护
- 拆分方便，功能独立
- 组件间作用域隔离，互不干扰

#### 组件数据来源

- `data`
- `props`
- `computed`
- `watch`

#### 组件生命周期

###### 生命周期函数

- `beforeCreate`
  - 初始化事件方法，比如 `this` `$on` `$emit`
  - 最先调用，一般不会做太多功能
- `created`
  - 观察响应式的数据变化
  - 还没有`this.$el`，无法获取真实DOM元素
  - 可以用来做数据请求
- `beforMount`
  - 检查有没有`template`属性，如果没有这个钩子函数不会执行
  - 如果有`template`属性，会把`template`渲染成一个`render`函数
  - 这个方法基本用不到
  - 内容渲染顺序: `render` -> `template` -> 元素中的内容
- `mounted`
  - DOM挂载后执行
  - 可以获取真实元素`this.$el`
  - 可以操作DOM
- `beforeUpdate`
  - 更新DOM元素前执行
  - 更新之前可以再修改一次数据
- `updated`
  - 更新之后执行
  - 这里不能更新数据，否则会导致死循环
- `beforeDestroy`
  - 销毁前执行
  - 一般用来清除定时器，解除绑定的方法事件
- `destroyed`
  - 销毁后执行

> 只要是操作DOM元素，就要在`$nextTick`中执行

###### 执行顺序

- 单个组件：
  - 挂载: `beforeCreate` -> `created` -> `beforeMount` -> `mounted`
  - 更新: `beforeUpdate` -> `updated`
  - 销毁: `beforeDestroy` -> `destroyed`
- 父子组件：
  - 挂载: 父`beforeCreate `-> 父`created` -> 父`beforeMount` -> 子`beforeCreate` -> 子`created` -> 子`beforeMount` -> 子`mounted` -> 父`mounted`
  - 更新: 父`beforeUpdate` -> 子`beforeUpdate` -> 子`updated` -> 父`updated`
  - 销毁: 父`beforeDestroy` -> 父`beforeDestroy` -> 子`destroyed` -> 父`destroyed`

#### 组件类型

- 全局组件: 可以在任何组件中直接使用，不需要引入，在组件的模板中使用
- 局部组件
- 函数式组件
- 异步组件

#### 组件通信