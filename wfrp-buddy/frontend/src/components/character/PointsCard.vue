<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100" elevation="2">
    <div class="text-overline mb-2 primary--text">Fate, Res & Motivation</div>
    <v-row dense>
      <v-col cols="3">
        <v-text-field v-model.number="store.char.fate" label="Fate" type="number" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="3">
        <v-text-field v-model.number="store.char.fortune" label="Fort." type="number" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="3">
        <v-text-field v-model.number="store.char.resilience" label="Res." type="number" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="3">
        <v-text-field v-model.number="store.char.resolve" label="Reso." type="number" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="12" class="mt-4">
        <v-text-field v-model="store.char.motivation" label="Motivation" variant="outlined" density="compact" hide-details />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0,0,0,0.1);
  background-color: var(--v-theme-surface);
}
.text-overline {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
}
</style>
