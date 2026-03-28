<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  talents: any[]
}>()

const emit = defineEmits(['add', 'remove'])

const newItem = ref({
  Name: '',
  MaxLvl: 1,
  Description: ''
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Talent(newItem.value as any))
    newItem.value = { Name: '', MaxLvl: 1, Description: '' }
  }
}
</script>

<template>
  <v-card class="pa-2 grim-card h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Talents</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left talent-col">Talent Name</th>
          <th class="text-center count-col">Max</th>
          <th class="text-left">Description</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, index) in props.talents" :key="index">
          <td class="pa-1">
            <v-text-field v-model="t.Name" hide-details density="compact" variant="plain" class="talent-name-input" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="t.MaxLvl" hide-details density="compact" variant="plain" class="text-center" control-variant="stacked" hide-controls />
          </td>
          <td class="pa-1">
            <v-text-field v-model="t.Description" hide-details density="compact" variant="plain" class="text-caption" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error" @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- NEW ITEM LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Talent..." hide-details density="compact" variant="plain" class="talent-name-input" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="newItem.MaxLvl" hide-details density="compact" variant="plain" class="text-center" control-variant="stacked" hide-controls />
          </td>
          <td class="pa-1">
            <v-text-field v-model="newItem.Description" placeholder="Description..." hide-details density="compact" variant="plain" class="text-caption" />
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
.talent-col { width: 30%; }
.count-col { width: 10%; }
.action-col { width: 40px; }

.talent-name-input :deep(input) {
  font-size: 1.1rem;
  font-weight: bold;
  font-family: 'Crimson Text', serif;
}

.new-item-row {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>
