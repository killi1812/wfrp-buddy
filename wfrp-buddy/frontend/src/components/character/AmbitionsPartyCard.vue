<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 ambitions-card h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary section-title">Ambitions</div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field v-model="store.char.Ambitions.shortTerm" label="Short-Term Ambition" variant="outlined" density="compact" hide-details class="mb-3" />
      </v-col>
      <v-col cols="12">
        <v-textarea v-model="store.char.Ambitions.LongTerm" label="Long-Term Ambition" variant="outlined" density="compact" hide-details rows="2" class="mb-3" />
      </v-col>
    </v-row>

    <v-divider class="my-2" />

    <div class="text-h6 mb-2 text-primary section-title">Party</div>
    <v-row dense v-if="store.char.Party">
      <v-col cols="12">
        <v-text-field v-model="store.char.Party.Name" label="Party Name" variant="outlined" density="compact" hide-details class="mb-3" />
      </v-col>
    </v-row>
    <div v-else class="text-caption text-grey pa-2">No party assigned</div>
  </v-card>
</template>

<style scoped>
.ambitions-card {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0,0,0,0.1);
}

.section-title {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

:deep(label) {
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}

:deep(input), :deep(textarea) {
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}
</style>
