import{_ as r,c as a,a as e,b as i,t as l,d as n,o}from"./app.88c262ad.js";const s="/realworld-example-apps/dataflow.png",b=JSON.parse('{"title":"Nuxt Realworld","description":"","frontmatter":{"title":"Nuxt Realworld","editLink":true},"headers":[{"level":2,"title":"技术栈","slug":"技术栈","link":"#技术栈","children":[]},{"level":2,"title":"数据流","slug":"数据流","link":"#数据流","children":[]},{"level":2,"title":"开发流程","slug":"开发流程","link":"#开发流程","children":[]}],"relativePath":"nuxt-frontend.md"}'),d={name:"nuxt-frontend.md"},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),_=n('<h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-hidden="true">#</a></h2><ol><li>前端框架：<a href="https://cn.vuejs.org/guide/introduction.html" target="_blank" rel="noreferrer">Vue.js 3</a></li><li>脚手架以及路由方案：<a href="https://nuxt.com/docs/getting-started/introduction" target="_blank" rel="noreferrer">Nuxt.js 3</a></li><li>CSS 框架：<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">tailwindcss</a></li><li>UI 组件库：<a href="https://tailwindui.com/" target="_blank" rel="noreferrer">tailwind UI</a> | <a href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" rel="noreferrer">Flowbite</a></li><li>状态管理：<a href="https://pinia.vuejs.org/zh/introduction.html" target="_blank" rel="noreferrer">Pinia</a></li><li>数据请求及 Mock：<a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">Axios</a> | <a href="https://miragejs.com/" target="_blank" rel="noreferrer">Mirage</a></li></ol><h2 id="数据流" tabindex="-1">数据流 <a class="header-anchor" href="#数据流" aria-hidden="true">#</a></h2><p><img src="'+s+'" alt="dataflow"></p><h2 id="开发流程" tabindex="-1">开发流程 <a class="header-anchor" href="#开发流程" aria-hidden="true">#</a></h2><ol><li>UI 组件开发及参数类型定义</li><li>状态设计及类型定义</li><li>状态绑定至 UI</li><li>Mock API 设计及参数、响应体类型定义</li><li>在 Mock 模式下完成交互及业务逻辑开发</li><li>Backend API 参数、响应体类型定义</li><li>实现 service transform 函数，将对前端 API 的请求转化为对后端 API 的请求，包括多合一、一拆多等特殊场景</li><li>关闭 Mock 模式并测试</li></ol>',6);function f(t,u,p,g,m,k){return o(),a("div",null,[e("h1",c,[i(l(t.$frontmatter.title)+" ",1),h]),_])}const w=r(d,[["render",f]]);export{b as __pageData,w as default};