<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  spells: any[]
}>()

const emit = defineEmits(['add', 'remove'])

const newItem = ref({
  Name: '',
  CastingNumber: 0,
  Range: '',
  Target: '',
  Duration: '',
  Effect: ''
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Spell(newItem.value as any))
    newItem.value = { Name: '', CastingNumber: 0, Range: '', Target: '', Duration: '', Effect: '' }
  }
}
</script>

<template>
  <v-card class="pa-2 h-100 grim-card" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Spells & Grimoire</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Spell</th>
          <th class="text-center">CN</th>
          <th class="text-center">Range</th>
          <th class="text-left">Effect</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, index) in props.spells" :key="index">
          <td class="pa-1">
            <v-text-field v-model="s.Name" hide-details density="compact" variant="plain" class="cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="s.CastingNumber" hide-details density="compact" variant="plain" class="text-center cell-text" control-variant="stacked" hide-controls />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="s.Range" hide-details density="compact" variant="plain" class="text-center cell-text" />
          </td>
          <td class="pa-1">
            <v-text-field v-model="s.Effect" hide-details density="compact" variant="plain" class="text-caption cell-text" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error" @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- NEW ITEM LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Spell..." hide-details density="compact" variant="plain" class="cell-bold" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="newItem.CastingNumber" hide-details density="compact" variant="plain" class="text-center cell-text" control-variant="stacked" hide-controls />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Range" placeholder="Range" hide-details density="compact" variant="plain" class="text-center cell-text" />
          </td>
          <td class="pa-1">
            <v-text-field v-model="newItem.Effect" placeholder="Effect..." hide-details density="compact" variant="plain" class="text-caption cell-text" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-plus-circle-outline" variant="plain" density="compact" color="primary" @click="onAdd" :disabled="!newItem.Name" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.action-col { width: 40px; }
.cell-bold { font-size: 1.1rem; font-weight: bold; }
.cell-text { font-size: 1rem; }
.new-item-row { background-color: rgba(var(--v-theme-primary), 0.05); }
</style>
