<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Armour List</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Armour</th>
          <th class="text-center">Location</th>
          <th class="text-center">AP</th>
          <th class="text-left">Qualities</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in store.char.armour" :key="a.name">
          <td class="cell-bold">{{ a.name }}</td>
          <td class="text-center cell-text">{{ a.location }}</td>
          <td class="text-center cell-bold text-primary">{{ a.ap }}</td>
          <td class="text-caption cell-text">{{ a.qualities }}</td>
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
</style>
