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

````js
const Abuout = (resolve) => require(["../components/About.vue"], resolve);
```

3. ES6集合Webpack的代码分割
~~~js
const Home = () => import('../components/About.vue')
~~~


#### 路由的嵌套使用

#### 传递参数
> 路由跳转的时候如何携带参数？

*  如何创建一个组件
1. 创建新的组件Profile.vue
2. 配置路由映射
3. 添加跳转的<router-link>

* 传递参数的方式有几种？
1. params
   1. 配置路由格式: /router/:id
   2. 传递的方式： 在path后面跟上对应的值
   3. 传递后形成的路径： /router/123, /router/abc
   4. 通过$route.param对象取值
2. query
   1. 配置路由格式: /router， --> 普通配置
   2. 传递的方式：对象中使用query的key作为传递方式
   3. 传递后形成的路径: /router?id=123, /outer?id=abc

url： 协议(scheme)://主机:端口/路径（path）?查询（query）

在template中写对象，需要对key做v-bind绑定 => :to="{}"

v-bind的作用：

#### $route和this.$router的区别：
$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
this.$route => 处于活跃的路由对象，可以获取name，path，query，params等

所有的组件都继承自vue的原型
=> 在Vue的原型prototype上添加方法，所有实例都可以用该方法

vue.use做了什么？
> vue.use(插件)内置会变成vue.install(插件)
>

#### 导航守卫
> 监听跳转的过程，用于做相应的操作

meta: 源数据 -- 描述数据的数据

导航钩子的三个参数
1. to：即将要进入的目标的路由对象
2  from: 当前导航即将要离开的路由对象
3. next： 调用该方法后，才能进入下一个钩子；next(false) --中断跳转； next('/') -- 跳转到根页面

导航钩子的种类（全局守卫）：
1. 前置回调（guard）: beforeEach
2. 后置回调（hook）: afterEach , 路由跳转完成才触发
   已经跳转完成，所以不用调用next方法

路由独享守卫的种类：


#### keep-alive 和 vue-router
> router-view 也是一个组件，如果被直接抱在keep-alive里面，所有路径匹配到的视图组件都会被缓存
keep-alive 是vue内置的一个组件，可以使得被包含的组件保留状态，或避免重新渲染
///D:/%E8%AF%BE%E4%BB%B6%E8%B5%84%E6%96%99/react/react/86/day86_React%E5%85%A8%E5%AE%B6%E6%A1%B6%E5%AE%9E%E6%88%98_07/Day07/Day07/PPT/11_React-Router%E8%B7%AF%E7%94%B1.pdf

file: ```

```;
````
