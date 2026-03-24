<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100" elevation="2">
    <div class="text-overline mb-2 primary--text">Mov & Exp</div>
    <v-row dense>
      <v-col cols="6">
        <v-number-input v-model="store.char.age" label="Age" variant="outlined" density="compact" hide-details class="mb-2" control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="6">
        <v-number-input v-model="store.char.movement" label="Move" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      
      <v-col cols="6">
        <v-text-field :model-value="store.char.movement * 2" label="Walk" readonly variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="6">
        <v-text-field :model-value="store.char.movement * 4" label="Run" readonly variant="outlined" density="compact" hide-details />
      </v-col>
      
      <v-col cols="12" class="mt-2">
        <v-divider />
      </v-col>
      
      <v-col cols="4" class="mt-2">
        <v-number-input v-model="store.char.expTotal" label="Total" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="4" class="mt-2">
        <v-number-input v-model="store.char.expSpent" label="Spent" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="4" class="mt-2">
        <v-text-field :model-value="store.expCurrent" label="Current" readonly variant="outlined" density="compact" hide-details />
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
