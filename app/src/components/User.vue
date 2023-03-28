<template>
  <div>
    <h2>我是用户信息界面</h2>
    <h4>当前登录的用户为：{{ userId }}</h4>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  computed: {
    userId() {
      return this.$route.params.userId // $route => 当前处于活动状态的路由; .userId，路由配置时冒号后面的东西
    }
  }
}
</script>

<style lang="scss" scoped></style>
