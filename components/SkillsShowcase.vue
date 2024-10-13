<template>
  <div class="skills-showcase mb-8">
    <h2 class="text-h4 font-weight-bold mb-4">Skills</h2>
    <v-chip-group>
      <v-chip
        v-for="skill in skills"
        :key="skill"
        outlined
        class="mr-2 mb-2"
      >
        {{ skill }}
      </v-chip>
    </v-chip-group>
  </div>
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
