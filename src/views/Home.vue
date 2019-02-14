<template>
  <div class="home test aspect-box">
    <div @click="goPage">
      <svg-icon icon-class="save" class="vm mr5"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log('process.env.VUE_APP_TITLE', process.env.VUE_APP_TITLE)
  },
  methods: {
    goPage() {
      this.$router.push('/404')
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  font-size: 12px;
  transform: translateX(0);
}
</style>
