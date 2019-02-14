<template>
  <div class="demo" @click="goPage"><h1>页面找不到了</h1></div>
</template>
<script>
export default {
  name: 'About',
  created() {
    console.log('process.env.VUE_APP_TITLE', process.env.VUE_APP_TITLE)
  },
  methods: {
    goPage() {
      this.$router.push('/')
    }
  }
}
</script>
