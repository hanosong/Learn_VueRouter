#### href

> hyper reference



### history 模式

1. history.pushState({}, '', 'home')
   * 修改地址，并且往栈中压入一个地址
2. history.back()
   * 弹出栈中最顶部的地址
3. history.replaceState({}, '', 'home')
   * 替换地址，不做压栈和出栈的操作
   * 用于不希望用户可以回退操作的业务场景
4. history.go(弹出（负数）/压入的个数)
   * 跳转到栈的某一个位置
   * history.back() === history.go(-1)
5. history.forward
   * history.forward === history.go(1)



### 前端路由的核心是什么？

> 改变url的时候，不要让页面进行整体的刷新

* 如何实现？



## vue router

#### 如何在模块化工程中使用vue-router框架

1. 导入路由对象，并且调用Vue.use(VueRouter)
2. 创建路由实例，并且传入映射配置
3. 在Vue实例中挂载和创建的路由实例

#### 使用vuerouter的步骤

1. 创建路由组件
2. 配置路由映射，组件和路径映射的关系
3. 使用路由，通过<router-link> he <router-view>

~~~
<router-link>: 该标签是一个vue-router中已经内置的组件，它会被渲染成一个<a>标签
<router-view>: 该标签会根据当前的路径，动态渲染出不同的组件
网页的其他内容，比如顶部的标题/导航，或者底部的一些版权信息等回合<router-view>处于同一个等级
在路由切换时，切换的是<router-view>挂载的组件其他内容不会发生改变

~~~

#### router-link标签中的属性

* to：用于指定跳转的路径

* tag： 指定router-link之后渲染成什么组件

  ~~~
  <router-link to="/home" tag="li">
  // 这个标签最终会被渲染成一个li元素，而不再是a标签
  ~~~

* replace: replace不会留下history => 用户跳转页面之后不能返回到上一个页面

  ~~~
  <router-link replace>
  ~~~

* active-class: 当router-link对应的路由匹配成功时（被点击时），会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称

  * 在进行高亮显示的导航菜单或者底部的tabbar时
  * 一般直接使用默认的router-link-active即可

  ~~~
  <router-link active-class="active">
  ~~~

  











file:///D:/%E8%AF%BE%E4%BB%B6%E8%B5%84%E6%96%99/react/react/86/day86_React%E5%85%A8%E5%AE%B6%E6%A1%B6%E5%AE%9E%E6%88%98_07/Day07/Day07/PPT/11_React-Router%E8%B7%AF%E7%94%B1.pdf