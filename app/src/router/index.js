import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/Home.vue'
import AboutView from '../components/About.vue'
import UserView from '../components/User.vue'
Vue.use(VueRouter) // 需要传入plugin插件--VueRouter

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: '/user/:userId',
    // path: '/user',
    name: 'user',
    component: UserView
  }
]

// 创建路由对象
const router = new VueRouter({
  // 配置路由和组件之间的映射关系，注意还需要在vue实例中挂载
  routes,
  mode: 'history' // 默认的是哈希模式，可以更改为历史路由
  // linkActiveClass: 'active' // 统一修改router-link active-class="active"
})

export default router
