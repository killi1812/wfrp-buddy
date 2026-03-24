<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-overline mb-2 primary--text px-2">Trappings & Gear</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Item</th>
          <th class="text-center">Enc</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in store.char.trappings" :key="t.name">
          <td>{{ t.name }}</td>
          <td class="text-center">{{ t.encumbrance }}</td>
          <td class="text-caption">{{ t.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
th {
  font-family: 'Crimson Text', serif;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 0.75rem;
}
td {
  font-family: 'Crimson Text', serif;
}
</style>
