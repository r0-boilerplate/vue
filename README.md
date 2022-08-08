# vue template

## Introduction

本项目是一个 vue 模板, 基于 vue3, vite, pinia, vue-router4, sass.

> 为避免文件内容过长, vue 文件被拆分为 template(.vue), script(.js), style(.scss) 三个部分,风格向小程序靠拢.

> 同时引入组件或静态资源时请使用相对路径.

## Usage

### Basic

```bash
git clone https://gitee.com/ruinb0w/vue-template.git
cd vue-template
npm i
npm run dev
```

## About

### vue3

可以在 vue3 中编写 vue2 风格的代码, vue3 是兼容 vue2 的, 更多细节见[vue3](https://vuejs.org/).

### vite

vite 使用了原生的 ESM 的特性, 可以加快编译打包速度. 详见[vite](https://vitejs.dev/).

**浏览器限制**

浏览器不允许加载本地模块, 所以打包后的文件不能直接打开, 需要放到服务器中. 可以使用[http-serve](https://github.com/http-party/http-server)来简单的开启一个服务器, 以测试打包后的项目是否正常. 使用以下命令即可快速开启一个服务器:

```bash
npm run serve
```

> Electron 不受此限制

**动态引入静态资源**

vite 动态引入(在 js 中引入)静态资源的方式也发生了变化, 已经将其封装为一个函数, 使用相对路径即可访问资源.

封装的函数位于 `src/utils/util.js getImageUrl`, 像下面这样使用即可:

```js
// 这里获取的图片位于src/assets/icons/vue.svg

const vue_logo = getImageUrl("icons/vue.svg");
```

具体可见`src/utils/util.js getImageUrl`和`src/components/LogoBar/LogoBar.js`.

> 静态资源请全部放到 assets 中

### pinia

pinia 是一种更加方便的状态管理工具, 性能也更好, vuex5 编码风格也将向 pinia 靠拢. 详见[pinia](https://pinia.vuejs.org/).

**需要注意的是 pinia 取消了 mutation, 请使用 action.**

状态的定义和使用见`src/store/main.js` 和 `src/components/IncreaseCount/IncreaseCount.js`.

### vue-router4

vue-router 可以实现前端的路由, 是一个强化单页面应用效果的工具. 详见[vue-router](https://router.vuejs.org/zh/introduction.html).

### sass

sass 兼容 css3 语法, 更多细节见[sass](https://sass-lang.com/).
