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
        <v-text-field v-model="store.char.species" label="Species" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.class" label="Class" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.career" label="Career" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.tier" label="Tier" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.path" label="Path" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.status" label="Status" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      
      <v-col cols="12">
        <v-number-input v-model="store.char.age" label="Age" variant="outlined" density="compact" hide-details class="mb-2" control-variant="stacked" hide-controls />
      </v-col>

      <v-col cols="4">
        <v-text-field v-model="store.char.height" label="Height" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="store.char.hair" label="Hair" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="store.char.eyes" label="Eyes" variant="outlined" density="compact" hide-details />
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
