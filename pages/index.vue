<template>
    <v-container>
      <h1 class="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <v-row>
        <v-col cols="12" md="6">
          <about-me />
        </v-col>
        <v-col cols="12" md="6">
          <skills-showcase />
        </v-col>
      </v-row>
      <project-list />
      <contact-form />
    </v-container>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  
  export default Vue.extend({
    name: 'IndexPage'
  })
  </script>