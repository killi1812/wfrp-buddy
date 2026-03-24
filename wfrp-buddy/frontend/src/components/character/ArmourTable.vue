<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-overline mb-2 primary--text px-2">Armour List</div>
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
          <td>{{ a.name }}</td>
          <td class="text-center">{{ a.location }}</td>
          <td class="text-center">{{ a.ap }}</td>
          <td class="text-caption">{{ a.qualities }}</td>
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
