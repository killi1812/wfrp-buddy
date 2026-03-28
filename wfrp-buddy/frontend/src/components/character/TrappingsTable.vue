<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Trappings & Gear</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Item</th>
          <th class="text-center">Enc</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!store.char.Trappings || store.char.Trappings.length === 0">
          <td colspan="3" class="text-center text-grey py-4 placeholder-text">No trappings added</td>
        </tr>
        <tr v-for="t in store.char.Trappings" :key="t.Name">
          <td class="cell-bold">{{ t.Name }}</td>
          <td class="text-center cell-text">{{ t.Encumbrance }}</td>
          <td class="text-caption cell-text">
            {{t.Qualities?.map(q => q.Name).join(', ')}}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.section-title {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

th {
  font-family: 'Crimson Text', serif;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 1rem !important;
  color: var(--v-theme-primary) !important;
}

td {
  font-family: 'Crimson Text', serif;
}

.cell-bold {
  font-size: 1.2rem;
  font-weight: bold;
}

.cell-text {
  font-size: 1rem;
}

.placeholder-text {
  font-size: 1.1rem;
  font-style: italic;
}
</style>
