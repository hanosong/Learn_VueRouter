import router from './router';

<template>
  <div id="app">
    <nav>
      <!-- router-link 是已经注册过的全局组件 -->
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/user">User</router-link> -->
      <router-link :to="'/user/' + userId">User</router-link>
      <!-- 使用其他方式跳转路由 -->
    </nav>
    <!-- router-view 是路由内容显示出来的位置的占位符 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'hakwan'
    }
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
