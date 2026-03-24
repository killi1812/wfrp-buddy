<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Weapons</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Weapon</th>
          <th class="text-center">Group</th>
          <th class="text-center">Dmg</th>
          <th class="text-center">Range</th>
          <th class="text-left">Qualities</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!store.char.Weapons || store.char.Weapons.length === 0">
           <td colspan="5" class="text-center text-grey py-4 placeholder-text">No weapons added</td>
        </tr>
        <tr v-for="w in store.char.Weapons" :key="w.Name">
          <td class="cell-bold">{{ w.Name }}</td>
          <td class="text-center cell-text">{{ w.Group }}</td>
          <td class="text-center cell-bold">{{ w.Damage }}</td>
          <td class="text-center cell-text">{{ w.Range_Reach }}</td>
          <td class="text-caption cell-text">{{ w.Qualities?.Name }}</td>
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
