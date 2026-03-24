import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Caracter, Characteristics, Skill } from '@/types/character'

export const useCharacterStore = defineStore('character', () => {
  const char = ref<Caracter>({
    CaracterId: '00000000-0000-0000-0000-000000000000',
    Name: 'Gottfried von Berlichingen',
    Species: 'Dwarf',
    Class: 'Warrior',
    Career: { Career: 'Slayer', CareerTier: 2, CareerPath: 'Troll Slayer' },
    Status: { Tier: 'Brass', Level: 3 },
    Description: { Age: 32, Height: '4\'8"', Hair: 'Orange', Eyes: 'Blue', Description: 'A standard slayer', Psychology: 'Grim' },
    Characteristics: {
      WeaponSkill: { Basic: 30, Advances: 5 },
      BalisticSkill: { Basic: 25, Advances: 0 },
      Strength: { Basic: 35, Advances: 10 },
      Toughnes: { Basic: 40, Advances: 15 },
      Initative: { Basic: 30, Advances: 0 },
      Agility: { Basic: 30, Advances: 0 },
      Dexterity: { Basic: 25, Advances: 0 },
      Inteligence: { Basic: 20, Advances: 0 },
      Willpower: { Basic: 35, Advances: 5 },
      Fellowhip: { Basic: 20, Advances: 0 }
    },
    Movment: { Movment: 3, Walk: 6, Run: 12 },
    Ambitions: { shortTerm: 'Kill a Troll', LongTerm: 'Die a Slayer\'s Death' },
    Points: {
      Fate: { FateMax: 2, FateCurrent: 2, FortuneMax: 2, FortuneCurrent: 2 },
      Resilience: { ResilienceMax: 2, ResilienceMCurrent: 2, ResolveMax: 2, ResolveCurrent: 2, Motive: 'Redemption' },
      Exp: { Current: 150, Spent: 100, Total: 250 }
    },
    Wounds: { Max: 15, Current: 15 },
    Welth: { BrassPenny: 10, SilverShilling: 5, GoldCrown: 1 },
    Corruption: { Treshold: 10, Current: 0, Mutations: [] },
    Psychology: ['Fear of Elves'],
    Talents: [],
    Skills: [
      { Name: 'Athletics', Characteristic: 'Agility', Basic: 30, Advances: 5 },
      { Name: 'Dodge', Characteristic: 'Agility', Basic: 30, Advances: 10 }
    ],
    Armour: { Name: '', Location: '', ArmourPoints: 0, Encumbrance: 0, Qualities: [], IsWorn: false },
    Trappings: [],
    Weapons: [],
    Spells: [],
    Prayers: []
  })

  const getCharValue = (key: keyof Characteristics) => {
    const c = char.value.Characteristics[key]
    return c.Basic + c.Advances
  }

  const getBonus = (key: keyof Characteristics) => Math.floor(getCharValue(key) / 10)

  const maxWounds = computed(() => {
    const sb = getBonus('Strength')
    const tb = getBonus('Toughnes')
    const wpb = getBonus('Willpower')
    return sb + (2 * tb) + wpb
  })

  const expCurrent = computed(() => char.value.Points.Exp.Total - char.value.Points.Exp.Spent)

  const getSkillTotal = (skill: Skill) => skill.Basic + skill.Advances

  return { char, maxWounds, expCurrent, getBonus, getCharValue, getSkillTotal }
})
