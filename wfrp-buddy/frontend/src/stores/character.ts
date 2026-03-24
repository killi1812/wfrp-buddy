import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Character } from '@/types/character'

export const useCharacterStore = defineStore('character', () => {
  const char = ref<Character>({
    name: 'Gottfried von Berlichingen',
    career: 'Slayer',
    path: 'Troll Slayer',
    status: 'Brass 3',
    age: 32,
    fate: 2,
    resilience: 2,
    movement: 3,
    experience: 150,
    wounds: 0, // We'll use maxWounds computed instead
    characteristics: [
      { name: 'WS', initial: 30, advances: 5, current: 35 },
      { name: 'BS', initial: 25, advances: 0, current: 25 },
      { name: 'S', initial: 35, advances: 10, current: 45 },
      { name: 'T', initial: 40, advances: 15, current: 55 },
      { name: 'I', initial: 30, advances: 0, current: 30 },
      { name: 'Ag', initial: 30, advances: 0, current: 30 },
      { name: 'Dex', initial: 25, advances: 0, current: 25 },
      { name: 'Int', initial: 20, advances: 0, current: 20 },
      { name: 'WP', initial: 35, advances: 5, current: 40 },
      { name: 'Fel', initial: 20, advances: 0, current: 20 },
    ],
    skills: [
      { name: 'Athletics', characteristic: 'Ag', advances: 5, isAdvanced: false },
      { name: 'Charm', characteristic: 'Fel', advances: 0, isAdvanced: false },
      { name: 'Dodge', characteristic: 'Ag', advances: 10, isAdvanced: false },
      { name: 'Melee (Basic)', characteristic: 'WS', advances: 15, isAdvanced: false },
      { name: 'Perception', characteristic: 'I', advances: 5, isAdvanced: false },
    ],
    talents: [],
    weapons: [
      { name: 'Great Axe', group: 'Two-handed', damage: '+SB+6', range: 'Reach', reload: '', qualities: 'Damaging', encumbrance: 2 }
    ],
    armour: [
      { name: 'Leather Jerkin', location: 'Body', ap: 1, qualities: '', encumbrance: 1 }
    ],
    trappings: [
      { name: 'Backpack', encumbrance: 0, description: 'Holds items' }
    ],
    prayers: [
      { name: 'Sigmar\'s Might', range: 'Self', duration: 'Instant', effect: '+10 Strength' }
    ],
  })

  const currentWounds = ref(0)

  const getCharacteristic = (name: string) => {
    return char.value.characteristics.find(c => c.name === name)
  }

  const getBonus = (name: string) => {
    const c = getCharacteristic(name)
    return c ? Math.floor(c.current / 10) : 0
  }

  const maxWounds = computed(() => {
    const sb = getBonus('S')
    const tb = getBonus('T')
    const wpb = getBonus('WP')
    return sb + (2 * tb) + wpb
  })

  // Set initial wounds if not set
  if (currentWounds.value === 0) {
    currentWounds.value = maxWounds.value
  }

  const updateCharacteristic = (name: string, type: 'initial' | 'advances', value: number) => {
    const c = char.value.characteristics.find(c => c.name === name)
    if (c) {
      c[type] = value
      c.current = c.initial + c.advances
    }
  }

  const getSkillTotal = (skill: any) => {
    const charValue = getCharacteristic(skill.characteristic)?.current || 0
    return charValue + skill.advances
  }

  return {
    char,
    currentWounds,
    maxWounds,
    getBonus,
    updateCharacteristic,
    getSkillTotal,
  }
})
