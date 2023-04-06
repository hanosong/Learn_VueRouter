<template>
  <div>
    <h2>档案！！</h2>
    <section>哇，原来档案在这哇~</section>
    <ul>
      <li>{{ $route.query.name }}</li>
      <li>{{ $route.query.age }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProfileView'
}
</script>

<style lang="scss" scoped></style>
