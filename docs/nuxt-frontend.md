---
title: Nuxt Realworld
editLink: true
---

# {{ $frontmatter.title }}

## 技术栈

1. 前端框架：[Vue.js 3](https://cn.vuejs.org/guide/introduction.html)
2. 脚手架以及路由方案：[Nuxt.js 3](https://nuxt.com/docs/getting-started/introduction)
3. CSS 框架：[tailwindcss](https://tailwindcss.com/)
4. UI 组件库：[tailwind UI](https://tailwindui.com/) | [Flowbite](https://flowbite.com/docs/getting-started/introduction/)
5. 状态管理：[Pinia](https://pinia.vuejs.org/zh/introduction.html)
6. 数据请求及 Mock：[Axios](https://github.com/axios/axios) | [Mirage](https://miragejs.com/)

## 数据流

![dataflow](/dataflow.png)

## 开发流程

1. UI 组件开发及参数类型定义
2. 状态设计及类型定义
3. 状态绑定至 UI
4. Mock API 设计及参数、响应体类型定义
5. 在 Mock 模式下完成交互及业务逻辑开发
6. Backend API 参数、响应体类型定义
7. 实现 service transform 函数，将对前端 API 的请求转化为对后端 API 的请求，包括多合一、一拆多等特殊场景
8. 关闭 Mock 模式并测试
