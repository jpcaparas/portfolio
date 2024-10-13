<template>
  <v-app class="app-background">
    <v-main>
      <v-container class="py-8 py-md-12">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout'
})
</script>

<style>
.app-background {
  background-color: #f7fafc !important;
}

.v-application {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}
</style>
