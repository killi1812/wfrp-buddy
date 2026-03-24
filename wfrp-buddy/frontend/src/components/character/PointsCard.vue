<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100" elevation="2">
    <v-row dense>
      <!-- FATE -->
      <v-col cols="6">
        <div class="points-display-box pa-2 mb-2">
          <div class="text-overline text-primary text-center">Fate</div>
          <div class="d-flex align-center justify-center">
            <v-number-input
              v-model="store.char.Points.Fate.FateCurrent"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-main"
              control-variant="stacked"
              hide-controls
            />
            <div class="text-h4 mx-1">/</div>
            <v-number-input
              v-model="store.char.Points.Fate.FateMax"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-sub"
              control-variant="stacked"
              hide-controls
            />
          </div>
        </div>
      </v-col>

      <!-- FORTUNE -->
      <v-col cols="6">
        <div class="points-display-box pa-2 mb-2">
          <div class="text-overline text-primary text-center">Fortune</div>
          <div class="d-flex align-center justify-center">
            <v-number-input
              v-model="store.char.Points.Fate.FortuneCurrent"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-main"
              control-variant="stacked"
              hide-controls
            />
            <div class="text-h4 mx-1">/</div>
            <v-number-input
              v-model="store.char.Points.Fate.FortuneMax"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-sub"
              control-variant="stacked"
              hide-controls
            />
          </div>
        </div>
      </v-col>

      <!-- RESILIENCE -->
      <v-col cols="6">
        <div class="points-display-box pa-2">
          <div class="text-overline text-primary text-center">Resilience</div>
          <div class="d-flex align-center justify-center">
            <v-number-input
              v-model="store.char.Points.Resilience.ResilienceMCurrent"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-main"
              control-variant="stacked"
              hide-controls
            />
            <div class="text-h4 mx-1">/</div>
            <v-number-input
              v-model="store.char.Points.Resilience.ResilienceMax"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-sub"
              control-variant="stacked"
              hide-controls
            />
          </div>
        </div>
      </v-col>

      <!-- RESOLVE -->
      <v-col cols="6">
        <div class="points-display-box pa-2">
          <div class="text-overline text-primary text-center">Resolve</div>
          <div class="d-flex align-center justify-center">
            <v-number-input
              v-model="store.char.Points.Resilience.ResolveCurrent"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-main"
              control-variant="stacked"
              hide-controls
            />
            <div class="text-h4 mx-1">/</div>
            <v-number-input
              v-model="store.char.Points.Resilience.ResolveMax"
              density="compact"
              variant="plain"
              hide-details
              class="points-input-sub"
              control-variant="stacked"
              hide-controls
            />
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
          class="motivation-field"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0,0,0,0.1);
  background-color: var(--v-theme-surface);
}

.points-display-box {
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  background-color: rgba(0,0,0,0.03);
}

.points-input-main :deep(input) {
  font-size: 2rem;
  font-weight: 700;
  text-align: right;
  width: 50px;
  padding: 0;
  font-family: 'Crimson Text', serif;
}

.points-input-sub :deep(input) {
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  width: 50px;
  padding: 0;
  font-family: 'Crimson Text', serif;
}

.text-overline {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  line-height: 1.2;
}

.motivation-field :deep(label), .motivation-field :deep(input) {
  font-family: 'Crimson Text', serif;
}
</style>
