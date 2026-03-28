<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  movment: any,
  exp: any
}>()

const expCurrent = computed(() => (props.exp?.Total || 0) - (props.exp?.Spent || 0))
</script>

<template>
  <v-card class="pa-4 header-sub-card" elevation="2">
    <div class="text-h6 mb-2 text-primary section-title">Movement & Exp</div>
    <v-row dense>
      <v-col cols="4">
        <v-number-input v-model="props.movment.Movment" label="Move" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="4">
        <v-number-input v-model="props.movment.Walk" label="Walk" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="4">
        <v-number-input v-model="props.movment.Run" label="Run" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      
      <v-col cols="12" class="mt-2">
        <v-divider />
      </v-col>
      
      <v-col cols="4" class="mt-2">
        <v-number-input v-model="props.exp.Total" label="Total" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="4" class="mt-2">
        <v-number-input v-model="props.exp.Spent" label="Spent" variant="outlined" density="compact" hide-details control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="4" class="mt-2">
        <v-text-field :model-value="expCurrent" label="Current" readonly variant="outlined" density="compact" hide-details />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0,0,0,0.1);
  background-color: var(--v-theme-surface);
  will-change: transform;
  transform: translateZ(0);
}
</style>
