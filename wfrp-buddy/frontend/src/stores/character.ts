import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { GetCharacterList, GetCharacter } from '../../bindings/changeme/service/charactersrv'
import * as model from '../../bindings/changeme/model'

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<model.CaracterPreview[]>([])
  const fullCharacters = ref<Record<string, model.CaracterDetails>>({})
  const selectedCharacterId = ref<string | null>(null)

  const selectedCharacter = computed(() => {
    return (selectedCharacterId.value ? fullCharacters.value[selectedCharacterId.value] : null) || null
  })

  // Initialize from backend
  const init = async () => {
    try {
      characters.value = await GetCharacterList()
    } catch (error) {
      console.error('Failed to fetch character list:', error)
    }
  }

  const loadCharacter = async (id: string) => {
    if (fullCharacters.value[id]) return fullCharacters.value[id]
    try {
      const details = await GetCharacter(id)
      if (details) {
        fullCharacters.value[id] = details
        return details
      }
    } catch (error) {
      console.error('Failed to load character:', error)
    }
    return null
  }

  const selectCharacter = (id: string) => {
    selectedCharacterId.value = id
  }

  const addItem = (listName: string, item: any) => {
    if (selectedCharacter.value) {
      // @ts-ignore
      selectedCharacter.value[listName].push(item)
    }
  }

  const removeItem = (listName: string, index: number) => {
    if (selectedCharacter.value) {
      // @ts-ignore
      selectedCharacter.value[listName].splice(index, 1)
    }
  }

  const getCharValue = (key: string) => {
    if (!selectedCharacter.value) return 0
    // @ts-ignore
    const c = selectedCharacter.value.Characteristics[key]
    return c ? (c.Basic + c.Advances) : 0
  }

  const getBonus = (key: string) => Math.floor(getCharValue(key) / 10)

  const getSkillTotal = (skill: any) => {
    const baseValue = getCharValue(skill.BaseChar)
    return baseValue + skill.Advances
  }

  return {
    characters,
    selectedCharacterId,
    selectedCharacter,
    init,
    loadCharacter,
    selectCharacter,
    addItem,
    removeItem,
    getCharValue,
    getBonus,
    getSkillTotal
  }
})
