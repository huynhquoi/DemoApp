import type { Task, TaskStore } from '@/types'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: (): TaskStore => ({
    tasks: [
      {
        id: 1,
        title: 'Buy some milk',
        isFav: false,
        isDelete: false
      },
      {
        id: 2,
        title: 'Buy some apple',
        isFav: true,
        isDelete: false
      }
    ],
    name: 'Zenka',
    id: 1
  }),
  getters: {
    favStatus: (state): Array<Task> => {
      return state.tasks.filter((t) => t.isFav === true)
    },
    favCount: (state): number => {
      return state.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state): number => {
      return state.tasks.length
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id
      })
    },
    toggleFav(id: number) {
      const task = this.tasks.find((t) => t.id === id)
      task.isFav = !task.isFav;
    }
  }
})
