<template>
  <header class="mb-8">
    <nav>
      <v-btn text to="/" exact>Home</v-btn>
      <v-btn text to="/blog" exact>Blog</v-btn>
      <v-btn text href="https://github.com/yourusername" target="_blank">GitHub</v-btn>
      <v-btn text href="https://twitter.com/yourusername" target="_blank">Twitter</v-btn>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header'
})
</script>
