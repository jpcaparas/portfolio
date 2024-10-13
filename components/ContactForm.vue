<template>
  <v-card class="mb-4">
    <v-card-title>Contact Me</v-card-title>
    <v-card-text>
      <div ref="typeformEmbed" style="width: 100%; height: 500px;"></div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { createWidget } from '@typeform/embed'

export default Vue.extend({
  name: 'ContactForm',
  mounted() {
    this.$nextTick(() => {
      createWidget('YOUR_TYPEFORM_ID_HERE', {
        container: this.$refs.typeformEmbed as HTMLElement,
        hideHeaders: true,
        hideFooter: true,
        opacity: 0,
      })
    })
  }
})
</script>
