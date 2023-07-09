<template>
  <div class="flex flex-col min-h-screen bg-theme-background">
    <SiteNavigation class="font-Lora" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
</script>

<style lang="scss" scoped></style>
