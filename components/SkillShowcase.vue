<template>
    <v-card class="mb-4">
      <v-card-title>Skills</v-card-title>
      <v-card-text>
        <v-chip-group>
          <v-chip v-for="skill in skills" :key="skill">{{ skill }}</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  
  export default Vue.extend({
    name: 'SkillsShowcase',
    data() {
      return {
        skills: [
          'Software Engineering',
          'Engineering Management',
          'Software Architecture',
          'Security',
          'Consulting'
        ]
      }
    }
  })
  </script>