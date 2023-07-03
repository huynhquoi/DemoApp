<script lang="ts">
import { storeToRefs } from 'pinia'
import TheWelcome from '../components/TheWelcome.vue'
import { useTaskStore } from '../stores/TaskStore'
export default {
  components: {
    TheWelcome,
  },
  setup() {
    const taskStore = useTaskStore()

    const { favCount, favStatus, totalCount } = storeToRefs(taskStore)

    return { taskStore, favCount, favStatus, totalCount }
  }
}
</script>

<template>
  <main>
    <TheWelcome
      :propsTask="taskStore"
      :favCount="favCount"
      :favStatus="favStatus"
      :totalCount="totalCount"
    />
  </main>
</template>
