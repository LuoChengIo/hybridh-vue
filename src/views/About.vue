<template>
  <div class="about" @click="goPage"><h1>This is an about page</h1></div>
</template>
<script>
export default {
  name: 'Home',
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
