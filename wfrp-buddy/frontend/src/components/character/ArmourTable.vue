<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  armour: any[]
}>()

const emit = defineEmits(['add', 'remove'])

const newItem = ref({
  Name: '',
  Location: '',
  ArmourPoints: 0,
  Encumbrance: 0,
  Qualities: [] as any[],
  IsWorn: true
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new (model as any).Armour(newItem.value as any))
    newItem.value = { Name: '', Location: '', ArmourPoints: 0, Encumbrance: 0, Qualities: [], IsWorn: true }
  }
}
</script>

<template>
  <v-card class="pa-2 h-100 grim-card" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Armour List</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Armour</th>
          <th class="text-center">Location</th>
          <th class="text-center">AP</th>
          <th class="text-left">Qualities</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in props.armour" :key="index">
          <td class="pa-1">
            <v-text-field v-model="a.Name" hide-details density="compact" variant="plain" class="cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="a.Location" hide-details density="compact" variant="plain"
              class="text-center cell-text" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="a.ArmourPoints" hide-details density="compact" variant="plain"
              class="text-center cell-bold text-primary" control-variant="stacked" hide-controls />
          </td>
          <td class="pa-1">
            <v-text-field :model-value="a.Qualities?.map((q: any) => q.Name).join(', ')" readonly hide-details
              density="compact" variant="plain" class="text-caption cell-text" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error"
              @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- NEW ITEM LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Armour..." hide-details density="compact"
              variant="plain" class="cell-bold" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Location" placeholder="Loc" hide-details density="compact" variant="plain"
              class="text-center cell-text" />
          </td>
          <td class="text-center pa-1">
            <v-number-input v-model="newItem.ArmourPoints" hide-details density="compact" variant="plain"
              class="text-center cell-bold" control-variant="stacked" hide-controls />
          </td>
          <td class="pa-1">
            <div class="text-caption text-grey italic-font">Qualities...</div>
          </td>
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
.action-col {
  width: 40px;
}

.cell-bold {
  font-size: 1.1rem;
  font-weight: bold;
}

.cell-text {
  font-size: 1rem;
}

.new-item-row {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

.italic-font {
  font-style: italic;
  font-family: 'Crimson Text', serif;
}
</style>
