<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :cusTomNumForSon="cusTomNum" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/About.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      cusTomNum: 100
    }
  }
}
</script>
