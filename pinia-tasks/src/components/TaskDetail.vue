<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { type Task } from '../types'
import { useTaskStore } from '../stores/TaskStore'

export default defineComponent({
  props: {
    task: {
      required: true,
      type: Object as PropType<Task>
    }
  },
  setup() {
    const taskStore = useTaskStore()

    return { taskStore }
  }
})
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
      <i
        class="material-icons"
        @click="taskStore.toggleFav(task.id)"
        :class="{ active: task.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>
