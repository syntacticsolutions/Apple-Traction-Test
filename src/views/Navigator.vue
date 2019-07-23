<template>
  <div class="about">
    <h1>This page will be redirected shortly.</h1>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$axios.get(`${this.$config.backendHost}/api/get_url/${this.$router.currentRoute.params.shorty}`)
      .then(res => {
        window.location.href = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
