<script setup lang="ts">
import { ref } from 'vue'
import * as model from '../../../bindings/changeme/model'

const props = defineProps<{
  weapons: any[]
}>()

const emit = defineEmits(['add', 'remove'])

const newItem = ref({
  Name: '',
  Group: '',
  Damage: '',
  Range_Reach: '',
  Qualities: { Name: '' } as any,
  Encumbrance: 0,
  IsWorn: false
})

const onAdd = () => {
  if (newItem.value.Name) {
    emit('add', new model.Weapon(newItem.value as any))
    newItem.value = { Name: '', Group: '', Damage: '', Range_Reach: '', Qualities: { Name: '' }, Encumbrance: 0, IsWorn: false }
  }
}
</script>

<template>
  <v-card class="pa-2 h-100 grim-card" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Weapons</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Weapon</th>
          <th class="text-center">Group</th>
          <th class="text-center">Dmg</th>
          <th class="text-center">Range</th>
          <th class="text-left">Qualities</th>
          <th class="text-center action-col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(w, index) in props.weapons" :key="index">
          <td class="pa-1">
            <v-text-field v-model="w.Name" hide-details density="compact" variant="plain" class="cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="w.Group" hide-details density="compact" variant="plain"
              class="text-center cell-text" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="w.Damage" hide-details density="compact" variant="plain"
              class="text-center cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="w.Range_Reach" hide-details density="compact" variant="plain"
              class="text-center cell-text" />
          </td>
          <td class="pa-1">
            <v-text-field v-model="w.Qualities.Name" hide-details density="compact" variant="plain"
              class="text-caption cell-text" />
          </td>
          <td class="text-center pa-0">
            <v-btn icon="mdi-trash-can-outline" variant="plain" density="compact" color="error"
              @click="emit('remove', index)" />
          </td>
        </tr>
        <!-- NEW ITEM LINE -->
        <tr class="new-item-row">
          <td class="pa-1">
            <v-text-field v-model="newItem.Name" placeholder="New Weapon..." hide-details density="compact"
              variant="plain" class="cell-bold" @keyup.enter="onAdd" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Group" placeholder="Group" hide-details density="compact" variant="plain"
              class="text-center cell-text" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Damage" placeholder="Dmg" hide-details density="compact" variant="plain"
              class="text-center cell-bold" />
          </td>
          <td class="text-center pa-1">
            <v-text-field v-model="newItem.Range_Reach" placeholder="Range" hide-details density="compact"
              variant="plain" class="text-center cell-text" />
          </td>
          <td class="pa-1">
            <v-text-field v-model="newItem.Qualities.Name" placeholder="Qualities..." hide-details density="compact"
              variant="plain" class="text-caption cell-text" />
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
</style>
