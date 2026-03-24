<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-overline mb-2 primary--text px-2">Weapons</div>
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
        <tr v-for="w in store.char.weapons" :key="w.name">
          <td>{{ w.name }}</td>
          <td class="text-center">{{ w.group }}</td>
          <td class="text-center">{{ w.damage }}</td>
          <td class="text-center">{{ w.range }}</td>
          <td class="text-caption">{{ w.qualities }}</td>
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
