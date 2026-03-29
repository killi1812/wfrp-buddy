import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as model from '../../bindings/changeme/model'

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<any[]>([])
  const selectedCharacterId = ref<string | null>(null)

  const selectedCharacter = computed(() => {
    return characters.value.find(c => c.CaracterId === selectedCharacterId.value) || null
  })

  // Initialize with dummy data
  const init = () => {
    if (characters.value.length > 0) return

    const char1 = new model.Caracter({
      CaracterId: '11111111-1111-1111-1111-111111111111',
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
      Armour: [],
      Spells: [],
      Prayers: [],
      Skills: [
        new model.Skill({ Name: 'Athletics', BaseChar: 'Agility', Basic: 30, Advances: 5 }),
        new model.Skill({ Name: 'Dodge', BaseChar: 'Agility', Basic: 30, Advances: 10 })
      ]
    })

    const char2 = new model.Caracter({
      CaracterId: '22222222-2222-2222-2222-222222222222',
      Name: 'Elara Swiftfoot',
      Species: 'Elf',
      Class: 'Ranger',
      Career: new model.Career({ Career: 'Hunter', CareerTier: 1, CareerPath: 'Scout' }),
      Status: new model.Status({ Tier: 'Brass', Level: 5 }),
      Description: new model.Description({ Age: 120, Height: '6\'1"', Hair: 'Silver', Eyes: 'Green', Description: 'An agile woodsman', Psychology: 'Calm' }),
      Characteristics: new model.Characteristics({
        WeaponSkill: { Basic: 30, Advances: 0 },
        BalisticSkill: { Basic: 40, Advances: 10 },
        Strength: { Basic: 30, Advances: 0 },
        Toughnes: { Basic: 30, Advances: 0 },
        Initative: { Basic: 40, Advances: 5 },
        Agility: { Basic: 45, Advances: 10 },
        Dexterity: { Basic: 35, Advances: 0 },
        Inteligence: { Basic: 35, Advances: 5 },
        Willpower: { Basic: 30, Advances: 0 },
        Fellowhip: { Basic: 30, Advances: 0 }
      } as any),
      Movment: new model.Movment({ Movment: 5, Walk: 10, Run: 20 }),
      Ambitions: new model.Ambitions({ ShortTerm: 'Track the Beast', LongTerm: 'Protect the Forest' }),
      Points: new model.Points({
        Fate: new model.FPoint({ FateMax: 1, FateCurrent: 1, FortuneMax: 1, FortuneCurrent: 1 }),
        Resilience: new model.RPoint({ ResilienceMax: 1, ResilienceMCurrent: 1, ResolveMax: 1, ResolveCurrent: 1, Motive: 'Vengeance' }),
        Exp: new model.ExpPoints({ Current: 50, Spent: 200, Total: 250 })
      }),
      Wounds: new model.Wounds({ Max: 12, Current: 12 }),
      Welth: new model.Welth({ BrassPenny: 20, SilverShilling: 10, GoldCrown: 0 }),
      Corruption: new model.Corruption({ Treshold: 6, Current: 0, Mutations: [] }),
      Psychology: ['Fear of Spiders'],
      Talents: [],
      Trappings: [],
      Weapons: [],
      Armour: [],
      Spells: [],
      Prayers: [],
      Skills: []
    })

    characters.value.push(char1, char2)
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
    selectCharacter,
    addItem,
    removeItem,
    getCharValue,
    getBonus,
    getSkillTotal
  }
})
