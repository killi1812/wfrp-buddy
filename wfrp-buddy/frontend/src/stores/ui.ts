import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ListViewMode } from '@/types/ListViewMode'

export const useUIStore = defineStore('ui', () => {
  const characterListViewMode = ref<ListViewMode>('grid')

  return {
    characterListViewMode
  }
})
