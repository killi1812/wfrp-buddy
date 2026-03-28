<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  prayers: any[],
  sin: number
}>()

const emit = defineEmits(['add', 'remove', 'update:sin'])

const newItem = ref({
  Name: '',
  Range: '',
  Target: '',
  Duration: '',
  Effect: ''
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Prayer(newItem.value as any))
    newItem.value = { Name: '', Range: '', Target: '', Duration: '', Effect: '' }
  }
}
</script>

<template>
  <v-card class="pa-2 h-100 grim-card relative-pos" elevation="2">
    <!-- Sin Counter -->
    <div class="sin-counter-box d-flex align-center">
      <div class="section-title mr-2" style="font-size: 0.7rem">SIN</div>
      <v-number-input 
        :model-value="props.sin" 
        @update:model-value="emit('update:sin', $event)"
        density="compact" 
        variant="outlined" 
        hide-details 
        control-variant="stacked" 
        hide-controls 
        class="sin-number-input" 
      />
    </div>

    <div class="text-h6 mb-2 text-primary px-2 section-title">Prayers & Blessings</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Prayer</th>
          <th class="text-center">Range</th>
          <th class="text-center">Duration</th>
          <th class="text-left">Effect</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in props.prayers" :key="index">
          <td class="pa-1">
            <v-text-field v-model="p.Name" hide-details density="compact" variant="plain" class="cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="p.Range" hide-details density="compact" variant="plain" class="text-center cell-text" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="p.Duration" hide-details density="compact" variant="plain" class="text-center cell-text" />
          </td>
          <td class="pa-1">
            <v-text-field v-model="p.Effect" hide-details density="compact" variant="plain" class="text-caption cell-text" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error" @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- NEW ITEM LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Prayer..." hide-details density="compact" variant="plain" class="cell-bold" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Range" placeholder="Range" hide-details density="compact" variant="plain" class="text-center cell-text" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Duration" placeholder="Duration" hide-details density="compact" variant="plain" class="text-center cell-text" />
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
.relative-pos { position: relative; }
.sin-counter-box { position: absolute; top: 8px; right: 8px; z-index: 10; display: flex; align-items: center; }
.sin-number-input { width: 80px; }
.sin-number-input :deep(input) { text-align: center; font-weight: bold; font-family: 'Crimson Text', serif; font-size: 1.1rem; }
.action-col { width: 40px; }
.cell-bold { font-size: 1.1rem; font-weight: bold; }
.cell-text { font-size: 1rem; }
.new-item-row { background-color: rgba(var(--v-theme-primary), 0.05); }
</style>
