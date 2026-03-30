import { defineStore } from 'pinia'
import { ref, markRaw } from 'vue'
import { Tab } from '@/components/general/TabsLayout.vue'
import CharacterSelection from '@/components/character/CharacterSelection.vue'

export const useTabsStore = defineStore('tabs', () => {
  const startTab: Tab = {
    key: 'character-selection',
    titleKey: 'Character List',
    content: markRaw(CharacterSelection),
    showClose: false,
  }

  const tabs = ref<Tab[]>([startTab])
  const activeTab = ref<string>(startTab.key)

  const openTab = (item: Tab, focus: boolean = true) => {
    const existingTab = tabs.value.find(t => t.key === item.key)
    if (existingTab) {
      if (focus) activeTab.value = item.key
      return
    }

    tabs.value.push(item)
    if (focus) {
      activeTab.value = item.key
    }
  }

  const closeTab = (key: string) => {
    if (tabs.value.length === 1) {
      // Don't close the last tab (usually the list)
      return
    }

    const index = tabs.value.findIndex(t => t.key === key)
    if (index === -1) return

    tabs.value.splice(index, 1)

    if (activeTab.value === key) {
      activeTab.value = tabs.value[Math.max(0, index - 1)].key
    }
  }

  return {
    tabs,
    activeTab,
    openTab,
    closeTab,
  }
})
