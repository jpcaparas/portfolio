<template>
    <v-card class="mb-4">
      <v-card-title>Projects</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="project in projects" :key="project.title">
            <v-list-item-content>
              <v-list-item-title>{{ project.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
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