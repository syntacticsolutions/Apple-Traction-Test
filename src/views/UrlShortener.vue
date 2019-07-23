<template>
  <div class="shortener">
    <h1>Welcome to the URL shortener!</h1>
    <h3>Please enter your url below!</h3>
    <input v-model="url"/>
    <button @click="shortenUrl">Send</button>
    <router-link :to="`/${shortenedIndex}`">{{ shortenedUrl }}</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data: () => ({
    url: '',
    shortenedIndex: undefined,
    baseUrl: window.location.origin
  }),
  computed: {
    shortenedUrl () {
      return this.shortenedIndex !== undefined ? `${this.baseUrl}/${this.shortenedIndex}` : ''
    }
  },
  methods: {
    shortenUrl () {
      console.log('poop')
      this.$axios.post(
        `${this.$config.backendHost}/api/create_url`,
        { url: this.url }
      )
        .then(res => {
          this.shortenedIndex = res.data
        })
    }
  }
}
</script>
