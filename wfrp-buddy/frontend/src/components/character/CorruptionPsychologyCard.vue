<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100 elevation-2">
    <div class="text-h6 mb-2 text-primary section-title">Corruption</div>
    <v-row dense class="mb-2">
      <v-col cols="6">
        <div class="text-center">
          <div class="section-title" style="font-size: 0.75rem">Current</div>
          <v-number-input v-model="store.char.Corruption.Current" density="compact" variant="outlined" hide-details
            control-variant="stacked" hide-controls class="compact-num-input" />
        </div>
      </v-col>
      <v-col cols="6">
        <div class="text-center">
          <div class="section-title" style="font-size: 0.75rem">Threshold</div>
          <v-number-input v-model="store.char.Corruption.Treshold" density="compact" variant="outlined" hide-details
            control-variant="stacked" hide-controls class="compact-num-input" />
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-2" />

    <div class="text-h6 mb-2 text-primary section-title">Psychology</div>
    <v-textarea :model-value="store.char.Psychology.join('\n')"
      @update:model-value="(val) => store.char.Psychology = val.split('\n')" label="Traits & Disorders"
      variant="outlined" density="compact" hide-details rows="3" class="psych-textarea" />
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--v-theme-surface);
}

.compact-num-input :deep(input) {
  text-align: center;
  font-family: 'Crimson Text', serif;
  font-weight: bold;
}

.psych-textarea :deep(textarea) {
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}
</style>
