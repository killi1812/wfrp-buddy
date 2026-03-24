<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-overline mb-2 primary--text px-2">Prayers & Blessings</div>
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
        <tr v-if="store.char.prayers.length === 0">
           <td colspan="4" class="text-center text-grey py-4">No prayers known</td>
        </tr>
        <tr v-for="p in store.char.prayers" :key="p.name">
          <td>{{ p.name }}</td>
          <td class="text-center">{{ p.range }}</td>
          <td class="text-center">{{ p.duration }}</td>
          <td class="text-caption">{{ p.effect }}</td>
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
