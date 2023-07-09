<template>
  <header class="sticky top-0 bg-theme-primary shadow-lg">
    <nav class="flex sm:flex-row items-center gap-6 justify-between text-white">
      <RouterLink :to="{ name: 'home' }">
        <div class="flex gap-4 bg-theme-secondary py-6 px-8 items-center">
          <img src="../assets/icons/mainLogo.png" class="w-10" />
          <p class="text-2xl">TawadaRIS</p>
        </div>
      </RouterLink>

      <div class="flex justify-end flex-row gap-10 px-28">
        <div class="hover:text-green-100">Home</div>
        <div class="hover:text-green-100">About</div>
        <div class="hover:text-green-100">User</div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
