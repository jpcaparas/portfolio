<template>
  <div class="project-list mb-8">
    <h2 class="text-h4 font-weight-bold mb-4">Projects</h2>
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card outlined class="h-100">
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectList',
  data() {
    return {
      projects: [
        { title: 'Project 1', description: 'A placeholder project description' },
        { title: 'Project 2', description: 'Another placeholder project description' },
        { title: 'Project 3', description: 'Yet another placeholder project description' }
      ]
    }
  }
})
</script>
