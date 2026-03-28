<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  skills: any[]
}>()

const emit = defineEmits(['add', 'remove'])

// Local state for the "empty line"
const newItem = ref({
  Name: '',
  Characteristic: 'Agility',
  Basic: 0,
  Advances: 0
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Skill(newItem.value as any))
    newItem.value = {
      Name: '',
      Characteristic: 'Agility',
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
          <th class="text-center">Charac.</th>
          <th class="text-center">Adv.</th>
          <th class="text-center">Skill</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, index) in props.skills" :key="index">
          <td class="pa-1">
            <v-text-field v-model="s.Name" hide-details density="compact" variant="plain" class="skill-name-input" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="s.Characteristic" hide-details density="compact" variant="plain"
              class="text-center" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="s.Advances" hide-details density="compact" variant="plain"
              class="centered-input-adv" control-variant="stacked" hide-controls />
          </td>
          <td class="text-center skill-total text-primary">
            {{ s.Basic + s.Advances }}
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error"
              @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- ALWAYS PRESENT EMPTY LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Skill..." hide-details density="compact"
              variant="plain" class="skill-name-input" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Characteristic" hide-details density="compact" variant="plain"
              class="text-center" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="newItem.Advances" hide-details density="compact" variant="plain"
              class="centered-input-adv" control-variant="stacked" hide-controls />
          </td>
          <td class="text-center"></td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-plus-circle-outline" variant="plain" density="compact" color="primary" @click="onAdd"
              :disabled="!newItem.Name" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.skill-col {
  width: 40%;
}

.action-col {
  width: 40px;
}

.skill-name-input :deep(input) {
  font-size: 1.1rem;
  font-weight: bold;
  font-family: 'Crimson Text', serif;
}

.skill-total {
  font-size: 1.2rem;
  font-weight: bold;
}

.centered-input-adv :deep(input) {
  text-align: center;
  font-family: 'Crimson Text', serif;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  width: 45px;
  margin: 0 auto;
  font-size: 1.1rem;
}

.new-item-row {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>
