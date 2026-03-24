<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 grim-card h-100 elevation-2">
    <v-row dense>
      <v-col cols="6">
        <div class="text-center">
          <div class="section-title" style="font-size: 0.8rem">Fate</div>
          <div class="d-flex align-center justify-center">
            <v-number-input v-model="store.char.Points.Fate.FateCurrent" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
            <div class="mx-1 text-primary">/</div>
            <v-number-input v-model="store.char.Points.Fate.FateMax" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="text-center">
          <div class="section-title" style="font-size: 0.8rem">Fortune</div>
          <div class="d-flex align-center justify-center">
            <v-number-input v-model="store.char.Points.Fate.FortuneCurrent" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
            <div class="mx-1 text-primary">/</div>
            <v-number-input v-model="store.char.Points.Fate.FortuneMax" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
          </div>
        </div>
      </v-col>
      <v-col cols="6" class="mt-2">
        <div class="text-center">
          <div class="section-title" style="font-size: 0.8rem">Resilience</div>
          <div class="d-flex align-center justify-center">
            <v-number-input v-model="store.char.Points.Resilience.ResilienceMCurrent" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
            <div class="mx-1 text-primary">/</div>
            <v-number-input v-model="store.char.Points.Resilience.ResilienceMax" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
          </div>
        </div>
      </v-col>
      <v-col cols="6" class="mt-2">
        <div class="text-center">
          <div class="section-title" style="font-size: 0.8rem">Resolve</div>
          <div class="d-flex align-center justify-center">
            <v-number-input v-model="store.char.Points.Resilience.ResolveCurrent" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
            <div class="mx-1 text-primary">/</div>
            <v-number-input v-model="store.char.Points.Resilience.ResolveMax" density="compact" variant="plain" hide-details control-variant="stacked" hide-controls class="points-plain-input" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="mt-3">
        <v-text-field 
          v-model="store.char.Points.Resilience.Motive" 
          label="Motivation" 
          variant="outlined" 
          density="compact" 
          hide-details 
          class="motivation-outlined" 
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.points-plain-input :deep(input) {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  width: 45px;
  padding: 0;
  font-family: 'Crimson Text', serif;
}

.motivation-outlined :deep(label), .motivation-outlined :deep(input) {
  font-family: 'Crimson Text', serif;
}
</style>
