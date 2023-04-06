<template>
  <div>
    <h2>首页！！</h2>
    <section>首页内容在这哦~</section>
    <nav>
      <!-- 记得home前面也要加分隔符，少写了会导致路径一直累加 -->
      <router-link to="/home/news">我是新闻哦</router-link> |
      <router-link to="/home/message">我是消息哦</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped></style>
