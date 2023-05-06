# 路由和它的发展

## 前后端分离阶段

### 前端渲染的理解

- 每次请求涉及到的静态资源都会从静态资源服务器获取，这些资源包括 HTML / CSS / JS， 然后在前端对这些请求回来的资源进行渲染
- 客户端的每一次请求，都会从静态资源服务器请求文件
- 和之前的后端路由不同，这时后端只是负责提供 API 了

### 前后端分离阶段

- 随着 Ajax 的出现，有了前后端分离的开发模式
- 后端只提供 API 来返回数据，前端通过 AJAX 获取数据，并且可以通过 JS 将数据渲染到页面上
- 优点：前后端责任清晰，后端专注于数据上，前端专注于交互和可视化上
- 并且当移动端（IOS/Android）出现后，后端不需要进行任何处理，依然使用之前的一套 Api 即可

### 单页面的富应用阶段

- SPA 最主要的特点就是在前后端分离的基础上加了一层前端路由
- 也就是前端来维护一套路由规则

### 前端路由的核心

改变 URL 但是页面不进行整体的刷新 => url 的 hash 或者 h5 的 history

#### href

> hyper reference

### history 模式

1. history.pushState({}, '', 'home')
   - 修改地址，并且往栈中压入一个地址
2. history.back()
   - 弹出栈中最顶部的地址
3. history.replaceState({}, '', 'home')
   - 替换地址，不做压栈和出栈的操作
   - 用于不希望用户可以回退操作的业务场景
4. history.go(弹出（负数）/压入的个数)
   - 跳转到栈的某一个位置
   - history.back() === history.go(-1)
5. history.forward
   - history.forward === history.go(1)

### 前端路由的核心是什么？

> 改变 url 的时候，不要让页面进行整体的刷新

- 如何实现？

## vue router

#### 如何在模块化工程中使用 vue-router 框架

1. 导入路由对象，并且调用 Vue.use(VueRouter)
2. 创建路由实例，并且传入映射配置
3. 在 Vue 实例中挂载和创建的路由实例

#### 使用 vuerouter 的步骤

1. 创建路由组件
2. 配置路由映射，组件和路径映射的关系
3. 使用路由，通过<router-link> he <router-view>

```
<router-link>: 该标签是一个vue-router中已经内置的组件，它会被渲染成一个<a>标签
<router-view>: 该标签会根据当前的路径，动态渲染出不同的组件
网页的其他内容，比如顶部的标题/导航，或者底部的一些版权信息等回合<router-view>处于同一个等级
在路由切换时，切换的是<router-view>挂载的组件其他内容不会发生改变

```

#### router-link 标签中的属性

- to：用于指定跳转的路径

- tag： 指定 router-link 之后渲染成什么组件

  ```
  <router-link to="/home" tag="li">
  // 这个标签最终会被渲染成一个li元素，而不再是a标签
  ```

- replace: replace 不会留下 history => 用户跳转页面之后不能返回到上一个页面

  ```
  <router-link replace>
  ```

- active-class: 当 router-link 对应的路由匹配成功时（被点击时），会自动给当前元素设置一个 router-link-active 的 class，设置 active-class 可以修改默认的名称

  - 在进行高亮显示的导航菜单或者底部的 tabbar 时
  - 一般直接使用默认的 router-link-active 即可

  ```
  <router-link active-class="active">
  ```

  #### 动态路由

  - /user/:userID ---> /user/user
  - path 和 Component 的匹配关系，称之为动态路由
  - 其中一个业务场景是录用传递数据的一种

#### 路由懒加载

> 用于解决 JS 文件过大，导致用户一次性从服务器请求页面时，造成屏幕短暂空白的情况
> 当打包构建应用时，JS 包会变得非常大，影响页面加载
> 将不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件 --> 更加高效

vendor: 第三方，vue/vue-router/axios/bs
路由懒加载： 一个路由打包一个文件
写法：

1. 老：结合 Vue 的异步组件和 Webpack 的代码分析

```js
const Home = (resolve) => {
  require.ensure(["../components/Home.vue"], () => {
    resolve(require("../components/Home.vue"));
  });
};
```

2. AMD 写法：

```js
const Abuout = (resolve) => require(["../components/About.vue"], resolve);
```

3. ES6 集合 Webpack 的代码分割

```js
const Home = () => import("../components/About.vue");
```

#### 路由的嵌套使用

#### 传递参数

> 路由跳转的时候如何携带参数？

- 如何创建一个组件

1. 创建新的组件 Profile.vue
2. 配置路由映射
3. 添加跳转的<router-link>

- 传递参数的方式有几种？

1. params
   1. 配置路由格式: /router/:id
   2. 传递的方式： 在 path 后面跟上对应的值
   3. 传递后形成的路径： /router/123, /router/abc
   4. 通过$route.param 对象取值
2. query
   1. 配置路由格式: /router， --> 普通配置
   2. 传递的方式：对象中使用 query 的 key 作为传递方式
   3. 传递后形成的路径: /router?id=123, /outer?id=abc

url： 协议(scheme)://主机:端口/路径（path）?查询（query）

在 template 中写对象，需要对 key 做 v-bind 绑定 => :to="{}"

v-bind 的作用：

#### $route和this.$router 的区别：

$router为VueRouter实例，想要导航到不同URL，则使用$router.push 方法
this.$route => 处于活跃的路由对象，可以获取 name，path，query，params 等

所有的组件都继承自 vue 的原型
=> 在 Vue 的原型 prototype 上添加方法，所有实例都可以用该方法

vue.use 做了什么？

> vue.use(插件)内置会变成 vue.install(插件)

#### 导航守卫

> 监听跳转的过程，用于做相应的操作

meta: 源数据 -- 描述数据的数据

导航钩子的三个参数

1. to：即将要进入的目标的路由对象
   2 from: 当前导航即将要离开的路由对象
2. next： 调用该方法后，才能进入下一个钩子；next(false) --中断跳转； next('/') -- 跳转到根页面

导航钩子的种类（全局守卫）：

1. 前置回调（guard）: beforeEach
2. 后置回调（hook）: afterEach , 路由跳转完成才触发
   已经跳转完成，所以不用调用 next 方法

路由独享守卫的种类：

#### keep-alive 和 vue-router

> router-view 也是一个组件，如果被直接抱在 keep-alive 里面，所有路径匹配到的视图组件都会被缓存
> keep-alive 是 vue 内置的一个组件，可以使得被包含的组件保留状态，或避免重新渲染

- keep-alive 有两个很重要的属性

  1.  include - 字符串或者正则表达式，只有匹配的组件会被缓存
  2.  exclude - 字符串或者正则表达式，任何匹配的组件都不会被缓存； ！！注意，多个组件时，逗号后面不要加空格

# react-router

安装 react-router-dom

1. BrowserRouter
2. HashRouter

### 路由映射配置

Routes: 包裹所有的 Route，在其中匹配一个路由

- Router5.x 使用的是 Switch 组件

Route: Route 用于路径的匹配

- path 属性: 用于设置匹配到的路径
- element 属性：设置匹配到的路径后，渲染的组件
  - Route5.x 使用的是 component 属性
- exact: 精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件
  - Router6.x 不再支持该属性

### 路由配置和跳转

Link 和 NavLink:
通常路径的跳转是用 Link 组件，最终会被渲染成 a 元素
NavLink 是在 link 基础上增加了一些样式属性

- Link 默认为普通的 a 元素
  to 属性： Link 中最重要的属性，用于设置跳转到的路径
  replace 属性： 布尔，默认 false，true 则开启
  reloadDocument： 布尔，默认 false，true 则每次都重新加载页面

- NavLink 选中的时候会自动添加一个样式 active
  style: 传入函数，函数接收一个对象，对象中可以结构出 isActive（点击时的类）

  className： 动态加类名, 传入一个函数，函数接收一个对象，包含 isActive 属性

  ```jsx
   className={({isActive}) => isActive? "myclass": ''}
   // 也可以把函数封装出来
   className = {getActiveClass}
   const getActiveClass = (isActive) => (
      className({"link-active" : isActive})
   )
  ```

### Navigate 导航

> router5 中叫 Redirect
> 用于路由的重定向，当这个组件出现时，就会执行跳转到对应的 to 的路径中

### NotFound 页面

### 路由的嵌套

### 自定义跳转-按钮

通过 useNavigate 的 hook 获取到 navigate 对象进行操作

- 使用 hook 时必须要写到函数顶层，而不能写道嵌套函数中，不然会报错
  > React Hook "useNavigate" is called in function "navigateTo" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"

```js
// 错误做法
const navigateTo = (path) => {
  const nav = useNavigate();
  nav(path);
};

// 正确做法
const nav = useNavigate();
const navigateTo = (path) => {
  nav(path);
};
```

navigate 对象除了第一个参数 path，还可以传入第二个参数 option
或者传入 delta（数字类型） => navigate（-1） -- 返回上一级...
option？：{replace?: boolean; state?: }
replace: true => 非 push 操作而是 replace 操作

#### 如果是在类组件中如何使用 useNavigate

=> 使用高阶函数组件处理，让类组件继承 useNavigate 方法

```jsx

```

### 路由传参

1. 类似 vue 的动态路由： 路径+id
2. 在 url 后拼接 queryString（查询字符串） => ?

###

ReactRouter5, 如果想用配置的方式写路由，需要安装 react-router-config 库
ReactRouter6 不需要

# VueX

为 vue.js 应用程序开发的状态管理模式
采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
使用 devtool extension 提供的 time-travel 调试，状态快照导入导出等高级调试功能

- 状态管理是什么？

* 状态管理模式 / 集中式存储管理
* => 把需要多个组件共享的变量全部存储在一个对象里面
* => 把这个对象放在顶层的 Vue 实例中，让所有组件都可以使用
* => 组件之间共享这个对象中的有所有变量属性

### Vuex 的应用场景

1. 多个界面共享的问题
2. 用户的登录状态（token），用户名称，头像，地理位置信息
3. 商品的收藏， 购物车中的物品

#### 单页面状态管理

单页面状态管理中的角色

1. View 变量显示的空间界面
2. State 变量 data 中的数据
3. Action 空间界面发生交互，改变变量数据
