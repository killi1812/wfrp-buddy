<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 talents-list" elevation="2">
    <div class="text-overline mb-2 text-primary px-2">Talents</div>
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
          <td class="text-caption text-subtext">{{ t.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.talents-list {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0,0,0,0.1);
}

.grim-table {
  background: transparent !important;
}

.placeholder-text {
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-subtext);
  font-style: italic;
}

th {
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-primary) !important;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 0.75rem;
}

td {
  font-family: 'Crimson Text', serif;
}
</style>
