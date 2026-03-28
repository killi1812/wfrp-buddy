<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary section-title">Personal Info</div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field v-model="store.char.Name" label="Name" variant="outlined" density="compact" hide-details
          class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.Species" label="Species" variant="outlined" density="compact" hide-details
          class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.Class" label="Class" variant="outlined" density="compact" hide-details
          class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.Career.Career" label="Career" variant="outlined" density="compact"
          hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-number-input v-model="store.char.Career.CareerTier" label="Tier" variant="outlined" density="compact"
          hide-details class="mb-2" control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.Career.CareerPath" label="Path" variant="outlined" density="compact"
          hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="store.char.Status.Tier" label="Status" variant="outlined" density="compact" hide-details
          class="mb-2" />
      </v-col>

      <v-col cols="12">
        <v-number-input v-model="store.char.Description.Age" label="Age" variant="outlined" density="compact"
          hide-details class="mb-2" control-variant="stacked" hide-controls />
      </v-col>

      <v-col cols="4">
        <v-text-field v-model="store.char.Description.Height" label="Height" variant="outlined" density="compact"
          hide-details />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="store.char.Description.Hair" label="Hair" variant="outlined" density="compact"
          hide-details />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="store.char.Description.Eyes" label="Eyes" variant="outlined" density="compact"
          hide-details />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--v-theme-surface);
}
</style>
