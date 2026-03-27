import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as model from '../../bindings/changeme/model'

export const useCharacterStore = defineStore('character', () => {
  const char = ref(new model.Caracter({
    Name: 'Gottfried von Berlichingen',
    Species: 'Dwarf',
    Class: 'Warrior',
    Career: new model.Career({ Career: 'Slayer', CareerTier: 2, CareerPath: 'Troll Slayer' }),
    Status: new model.Status({ Tier: 'Brass', Level: 3 }),
    Description: new model.Description({ Age: 32, Height: '4\'8"', Hair: 'Orange', Eyes: 'Blue', Description: 'A standard slayer', Psychology: 'Grim' }),
    Characteristics: new model.Characteristics({
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
    } as any),
    Movment: new model.Movment({ Movment: 3, Walk: 6, Run: 12 }),
    Ambitions: new model.Ambitions({ ShortTerm: 'Kill a Troll', LongTerm: 'Die a Slayer\'s Death' }),
    Points: new model.Points({
      Fate: new model.FPoint({ FateMax: 2, FateCurrent: 2, FortuneMax: 2, FortuneCurrent: 2 }),
      Resilience: new model.RPoint({ ResilienceMax: 2, ResilienceMCurrent: 2, ResolveMax: 2, ResolveCurrent: 2, Motive: 'Redemption' }),
      Exp: new model.ExpPoints({ Current: 150, Spent: 100, Total: 250 })
    }),
    Wounds: new model.Wounds({ Max: 15, Current: 15 }),
    Welth: new model.Welth({ BrassPenny: 10, SilverShilling: 5, GoldCrown: 1 }),
    Corruption: new model.Corruption({ Treshold: 10, Current: 0, Mutations: [] }),
    Psychology: ['Fear of Elves'],
    Talents: [],
    Trappings: [],
    Weapons: [],
    Spells: [],
    Prayers: [],
    Skills: []
  }))

  const getCharValue = (key: string) => {
    // @ts-ignore
    const c = char.value.Characteristic[key]
    return c ? (c.Basic + c.Advances) : 0
  }

  const getBonus = (key: string) => Math.floor(getCharValue(key) / 10)

  const maxWounds = computed(() => {
    const sb = getBonus('Strength')
    const tb = getBonus('Toughnes')
    const wpb = getBonus('Willpower')
    return sb + (2 * tb) + wpb
  })

  const expCurrent = computed(() => char.value.Points.Exp.Total - char.value.Points.Exp.Spent)

  const getSkillTotal = (skill: any) => skill.Basic + skill.Advances

  return { char, maxWounds, expCurrent, getBonus, getCharValue, getSkillTotal }
})
