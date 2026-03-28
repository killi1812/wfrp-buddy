<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  skills: any[],
  getSkillTotal: (skill: any) => number
}>()

const emit = defineEmits(['add', 'remove'])

const charOptions = [
  { title: 'WS', value: 'WeaponSkill' },
  { title: 'BS', value: 'BalisticSkill' },
  { title: 'S', value: 'Strength' },
  { title: 'T', value: 'Toughnes' },
  { title: 'I', value: 'Initative' },
  { title: 'Ag', value: 'Agility' },
  { title: 'Dex', value: 'Dexterity' },
  { title: 'Int', value: 'Inteligence' },
  { title: 'WP', value: 'Willpower' },
  { title: 'Fel', value: 'Fellowhip' }
]

// Local state for the "empty line"
const newItem = ref({
  Name: '',
  BaseChar: 'Agility',
  Basic: 0,
  Advances: 0
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Skill(newItem.value as any))
    newItem.value = {
      Name: '',
      BaseChar: 'Agility',
      Basic: 0,
      Advances: 0
    }
  }
}
</script>

<template>
  <v-card class="pa-2 grim-card h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Skills</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left skill-col">Name</th>
          <th class="text-center char-col">Char.</th>
          <th class="text-center adv-col">Adv.</th>
          <th class="text-center total-col">Skill</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, index) in props.skills" :key="index">
          <td class="pa-1">
            <v-text-field v-model="s.Name" hide-details density="compact" variant="plain" class="skill-name-input" />
          </td>
          <td class="text-center pa-1">
            <v-select
              v-model="s.BaseChar"
              :items="charOptions"
              hide-details
              density="compact"
              variant="plain"
              class="char-select"
            >
              <template v-slot:selection="{ item }">
                <div class="text-center w-100 text-subtitle-2">{{ item.title }}</div>
              </template>
            </v-select>
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="s.Advances" hide-details density="compact" variant="plain" class="centered-input-adv" control-variant="stacked" hide-controls />
          </td>
          <td class="text-center skill-total text-primary">
            {{ props.getSkillTotal(s) }}
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error" @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- ALWAYS PRESENT EMPTY LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Skill..." hide-details density="compact" variant="plain" class="skill-name-input" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-select
              v-model="newItem.BaseChar"
              :items="charOptions"
              hide-details
              density="compact"
              variant="plain"
              class="char-select"
            >
              <template v-slot:selection="{ item }">
                <div class="text-center w-100 text-subtitle-2">{{ item.title }}</div>
              </template>
            </v-select>
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="newItem.Advances" hide-details density="compact" variant="plain" class="centered-input-adv" control-variant="stacked" hide-controls />
          </td>
          <td class="text-center"></td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-plus-circle-outline" variant="plain" density="compact" color="primary" @click="onAdd" :disabled="!newItem.Name" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.skill-col { width: 35%; }
.char-col { width: 60px; }
.adv-col { width: 60px; }
.total-col { width: 60px; }
.action-col { width: 40px; }

.skill-name-input :deep(input) {
  font-size: 1.1rem;
  font-weight: bold;
}

.char-select :deep(.v-field__input) {
  padding: 0;
  justify-content: center;
}

.skill-total {
  font-size: 1.2rem;
  font-weight: bold;
}

.centered-input-adv :deep(input) {
  text-align: center;
  background-color: rgba(0,0,0,0.03);
  border-radius: 4px;
  width: 45px;
  margin: 0 auto;
  font-size: 1.1rem;
}

.new-item-row {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>
