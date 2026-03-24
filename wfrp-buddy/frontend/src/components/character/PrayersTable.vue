<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Prayers & Blessings</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Prayer</th>
          <th class="text-center">Range</th>
          <th class="text-center">Duration</th>
          <th class="text-left">Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!store.char.Prayers || store.char.Prayers.length === 0">
           <td colspan="4" class="text-center text-grey py-4 placeholder-text">No prayers known</td>
        </tr>
        <tr v-for="p in store.char.Prayers" :key="p.Name">
          <td class="cell-bold">{{ p.Name }}</td>
          <td class="text-center cell-text">{{ p.Range }}</td>
          <td class="text-center cell-text">{{ p.Duration }}</td>
          <td class="text-caption cell-text">{{ p.Effect }}</td>
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
  font-size: 1.1rem;
}
.placeholder-text {
  font-size: 1.1rem;
  font-style: italic;
}
</style>
