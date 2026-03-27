<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 talents-list" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Talents</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left talent-col">Talent Name</th>
          <th class="text-center count-col">Times</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="store.char.Talents.length === 0">
           <td colspan="3" class="text-center placeholder-text py-4">No talents added</td>
        </tr>
        <tr v-for="t in store.char.Talents" :key="t.Name">
          <td class="talent-name">{{ t.Name }}</td>
          <td class="text-center talent-count">{{ t.MaxLvl || 1 }}</td>
          <td class="talent-desc">{{ t.Description }}</td>
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

.section-title {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.grim-table {
  background: transparent !important;
}

.talent-col {
  width: 30%;
}

.count-col {
  width: 10%;
}

.placeholder-text {
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-subtext);
  font-style: italic;
  font-size: 1.1rem;
}

th {
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-primary) !important;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 1rem !important;
}

td {
  font-family: 'Crimson Text', serif;
}

.talent-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.talent-count {
  font-size: 1.1rem;
}

.talent-desc {
  font-size: 1rem;
  color: var(--v-theme-subtext);
}
</style>
