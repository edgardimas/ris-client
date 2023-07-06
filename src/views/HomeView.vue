<!-- eslint-disable no-unused-vars -->

<template>
  <main class="text-white text-1xl">
    <div>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-10"
      >
        Workspace
      </button>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-4"
      >
        Patient
      </button>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-4"
      >
        Scheduler
      </button>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-4"
      >
        Reports
      </button>
    </div>
    <div>
      <WorkSpace />
    </div>
  </main>
</template>

<script>
import WorkSpace from '../components/WorkSpace.vue'
export default {
  components: {
    WorkSpace
  }
}
</script>
