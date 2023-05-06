<template>
  <div>
    <h2>关于！！</h2>
    <section>关于我们在这哦~</section>
    <h3 :text="msg"></h3>
    <h3 :text="customNumForSon"></h3>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  props: {
    customNumForSon: {
      type: Number,
      validator: function (value) {
        // return true if value is a number, false otherwise
        return typeof value === 'number'
      },
      // use kebab-case for prop name
      // and add default value to avoid error when using the prop
      default: 0,
      // change the name of the prop to follow kebab-case convention
      name: 'custom-num-for-son'
    },
    msg: String
  }
}
</script>

<style lang="css" scoped></style>
