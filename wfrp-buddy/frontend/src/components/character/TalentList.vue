<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 talents-list" elevation="4">
    <div class="text-overline mb-2 amber-lighten-2 px-2">Talents</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Talent Name</th>
          <th class="text-center">Times</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="store.char.talents.length === 0">
           <td colspan="3" class="text-center placeholder-text py-4">No talents added</td>
        </tr>
        <tr v-for="t in store.char.talents" :key="t.name">
          <td class="font-weight-bold">{{ t.name }}</td>
          <td class="text-center">{{ t.timesTaken }}</td>
          <td class="text-caption text-grey-darken-1">{{ t.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.talents-list {
  background-color: #1e1e1e;
  border: 1px solid #333;
}

.grim-table {
  background: transparent !important;
  color: #ddd !important;
}

.placeholder-text {
  font-family: 'Crimson Text', serif;
  color: #666;
  font-style: italic;
}

th {
  font-family: 'Crimson Text', serif;
  color: #aaa !important;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 0.75rem;
}

td {
  font-family: 'Crimson Text', serif;
}
</style>
