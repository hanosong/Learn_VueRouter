import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../components/Home.vue'
// import AboutView from '../components/About.vue'
import UserView from '../components/User.vue'
Vue.use(VueRouter) // 需要传入plugin插件--VueRouter

// 统一一起管理动态组件
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    // component: HomeView
    component: Home,
    meta: {
      // 源数据
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news', // 子路由不需要加分隔符 /
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView
    component: About,
    meta: {
      // 源数据
      title: '关于'
    },
    beforeEach(to, from, next) {
      console.log('beforeEach')
      next()
    }

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
  },
  {
    path: '/profile',
    // path: '/user',
    name: 'user ',
    component: Profile
  }
]

// 创建路由对象
const router = new VueRouter({
  // 配置路由和组件之间的映射关系，注意还需要在vue实例中挂载
  routes,
  mode: 'history' // 默认的是哈希模式，可以更改为历史路由
  // linkActiveClass: 'active' // 统一修改router-link active-class="active"
})

// 添加全局导航守卫
// 动态修改标题--前置钩子
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta && to.matched[0].meta.title
  next() // 必须调用,不调用的话路由不会跳转
})

// 后置钩子（hook）
router.afterEach((to, from) => {
  console.log(to, from, 'afterEach')
})
export default router
