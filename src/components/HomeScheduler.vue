<script setup>
import DropDown from './helper_components/DropDown.vue'
import { ref } from 'vue'

const people = [
  { value: 1, label: 'All Department' },
  { value: 2, label: 'Radiology' },
  { value: 3, label: 'Internis ' }
]

const roles = [
  { value: 1, label: 'X-rays' },
  { value: 2, label: 'Radiography' },
  { value: 3, label: 'Fluoroscopy' },
  { value: 4, label: 'Computed Tomography (CT) Scan' },
  { value: 5, label: 'Ultrasound' },
  { value: 6, label: 'Magnetic Resonance Imaging (MRI)' }
]

const form = ref({
  person_id: null,
  role_ids: []
})
</script>

<template>
  <div class="p-4 max-w-sm">
    <form action="#" class="flex flex-col space-y-6">
      <DropDown placeholder="Select Department" v-model="form.person_id" :options="people" />
      <DropDown placeholder="Select Modalities" v-model="form.role_ids" :options="roles" multiple />
    </form>
  </div>
</template>
