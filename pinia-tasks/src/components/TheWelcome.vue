<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue'
import { type Task, type TaskStore } from '../types'
import TaskDetail from './TaskDetail.vue'
import TaskForm from './TaskForm.vue'

export default defineComponent({
  props: {
    propsTask: {
      required: true,
      type: Object as PropType<TaskStore>
    },
    favStatus: {
      required: true,
      type: Array<Task>
    },
    favCount: {
      required: true,
      type: Number
    },
    totalCount: {
      required: true,
      type: Number
    }
  },
  components: {
    TaskDetail,
    TaskForm
  },
  setup() {
    const filterAll = ref(true)

    return { filterAll }
  }
})
</script>

<template>
  <div class="task-owner">
    <p>Hello {{ propsTask.name }}</p>
  </div>

  <task-form />

  <nav class="filter">
    <button @click="filterAll = true">All Task</button>
    <button @click="filterAll = false">Favorite Task</button>
  </nav>

  <div class="task-list" v-if="filterAll">
    <p>You have {{ totalCount }} task</p>
    <div v-for="task in propsTask.tasks" :key="task.id">
      <task-detail :task="task" />
    </div>
  </div>

  <div class="task-list" v-else>
    <p>You have {{ favCount }} favorite Task</p>
    <div v-for="task in favStatus" :key="task.id">
      <task-detail :task="task" />
    </div>
  </div>
</template>
