<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100" elevation="2">
    <div class="text-overline mb-2 primary--text">Personal Info</div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field v-model="store.char.name" label="Name" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.career" label="Career" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.path" label="Path" variant="outlined" density="compact" hide-details />
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
