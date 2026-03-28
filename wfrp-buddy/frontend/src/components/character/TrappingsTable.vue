<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  trappings: any[]
}>()

const emit = defineEmits(['add', 'remove'])

const newItem = ref({
  Name: '',
  Encumbrance: 0,
  Qualities: [] as any[],
  IsWorn: false,
  IsStorage: false,
  StoreEnc: 0,
  FilledEnc: 0,
  Trappings: []
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Trapping(newItem.value as any))
    newItem.value = { Name: '', Encumbrance: 0, Qualities: [], IsWorn: false, IsStorage: false, StoreEnc: 0, FilledEnc: 0, Trappings: [] }
  }
}
</script>

<template>
  <v-card class="pa-2 h-100 grim-card" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Trappings & Gear</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Item</th>
          <th class="text-center">Enc</th>
          <th class="text-left">Description</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, index) in props.trappings" :key="index">
          <td class="pa-1">
            <v-text-field v-model="t.Name" hide-details density="compact" variant="plain" class="cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="t.Encumbrance" hide-details density="compact" variant="plain" class="text-center cell-text" control-variant="stacked" hide-controls />
          </td>
          <td class="pa-1">
            <v-text-field :model-value="t.Qualities?.map((q:any) => q.Name).join(', ')" readonly hide-details density="compact" variant="plain" class="text-caption cell-text" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error" @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- NEW ITEM LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Item..." hide-details density="compact" variant="plain" class="cell-bold" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="newItem.Encumbrance" hide-details density="compact" variant="plain" class="text-center cell-text" control-variant="stacked" hide-controls />
          </td>
          <td class="pa-1">
            <div class="text-caption text-grey italic-font">Automatic qualities...</div>
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
.italic-font { font-style: italic; font-family: 'Crimson Text', serif; }
</style>
