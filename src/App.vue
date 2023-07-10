<template>
  <div class="flex flex-col min-h-screen justify-between bg-theme-background">
    <div>
      <SiteNavigation class="font-Lora" />
      <RouterView />
    </div>
    <FootBar class="flex justify-end" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
import FootBar from './components/FootBar.vue'
</script>

<style lang="scss" scoped></style>
