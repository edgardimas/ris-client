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

<script>
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-vue'
import { onMounted } from 'vue'

export default {
  name: 'WeeklyCalendar',
  props: {},
  components: {
    DayPilotCalendar
  },
  setup() {
    const calendarRef = ref(null)

    const config = {
      viewType: 'Week',
      startDate: DayPilot.Date.today(),
      onTimeRangeSelected: (args) => {
        DayPilot.Modal.prompt('Create a new event:', 'Event 1').then((modal) => {
          var dp = args.control
          dp.clearSelection()
          if (modal.canceled) {
            return
          }
          dp.events.add({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          })
        })
      },
      eventDeleteHandling: 'Disabled',
      onEventMoved: () => {
        console.log('Event moved')
      },
      onEventResized: () => {
        console.log('Event resized')
      }
    }

    const loadEvents = () => {
      // placeholder for an HTTP call
      var data = [
        {
          id: 1,
          start: DayPilot.Date.today().addHours(10),
          end: DayPilot.Date.today().addHours(11),
          text: 'Event 1'
        },
        {
          id: 2,
          start: DayPilot.Date.today().addHours(13),
          end: DayPilot.Date.today().addHours(16),
          text: 'Event 2'
        }
      ]
      calendarRef.value.control.update({ events: data })
    }

    onMounted(() => {
      loadEvents()
      console.log('Mounted.')
    })

    return {
      config,
      calendarRef
    }
  }
}
</script>

<template>
  <div class="p-4 max-w-sm">
    <form action="#" class="flex flex-col space-y-6">
      <DropDown placeholder="Select Department" v-model="form.person_id" :options="people" />
      <DropDown placeholder="Select Modalities" v-model="form.role_ids" :options="roles" multiple />
    </form>
    <DayPilotCalendar id="dp" :config="config" ref="calendarRef" />
  </div>
</template>
