<!-- eslint-disable no-unused-vars -->

<template>
  <main class="text-white text-1xl">
    <div class="font-Lora">
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-10"
        @click="page = 'isWorkspace'"
      >
        Workspace
      </button>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-4"
        @click="page = 'isPatient'"
      >
        Patient
      </button>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-4"
        @click="page = 'isScheduler'"
      >
        Scheduler
      </button>
      <button
        class="bg-theme-primary hover:bg-theme-secondary text-white py-2 px-4 rounded my-10 ml-4"
      >
        Reports
      </button>
    </div>
    <div class="px-10" v-if="page === 'isWorkspace'">
      <HomeWorkspace />
    </div>
    <div class="px-10" v-if="page === 'isPatient'">
      <HomePatient />
    </div>
  </main>
</template>

<script>
import HomeWorkspace from '../components/HomeWorkspace.vue'
import HomePatient from '../components/HomePatient.vue'
export default {
  data() {
    return {
      page: 'isWorkspace'
    }
  },
  components: {
    HomeWorkspace,
    HomePatient
  }
}
</script>
