<template>
  <div>
    <Header />
    <AboutMe />
    <SkillsShowcase />
    <ProjectList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import AboutMe from '~/components/AboutMe.vue'
import SkillsShowcase from '~/components/SkillsShowcase.vue'
import ProjectList from '~/components/ProjectList.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Header,
    AboutMe,
    SkillsShowcase,
    ProjectList
  }
})
</script>
