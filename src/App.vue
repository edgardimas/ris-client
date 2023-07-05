<template>
  <div class="flex flex-col min-h-screen font-Roboto bf-weather-primary">
    <RouterView />
    <SiteNavigation />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation'
</script>

<style lang="scss" scoped></style>
