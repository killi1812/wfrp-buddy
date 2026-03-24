<script setup lang="ts">
import PersonalInfoCard from './PersonalInfoCard.vue'
import StatusCard from './StatusCard.vue'
import PointsCard from './PointsCard.vue'
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-row dense>
    <v-col cols="12" md="4">
      <PersonalInfoCard />
    </v-col>
    <v-col cols="12" md="3">
      <StatusCard />
    </v-col>
    <v-col cols="12" md="3">
      <PointsCard />
    </v-col>
    <v-col cols="12" md="2">
      <v-card class="pa-4 grim-card h-100 d-flex flex-column align-center justify-center elevation-2">
        <div class="section-title mb-1">Wounds</div>
        <div class="d-flex align-center">
          <v-number-input
            v-model="store.char.Wounds.Current"
            density="compact"
            variant="plain"
            hide-details
            class="header-large-input"
            control-variant="stacked"
            hide-controls
          />
          <div class="text-h4 mx-1 primary--text">/</div>
          <v-number-input
            v-model="store.char.Wounds.Max"
            density="compact"
            variant="plain"
            hide-details
            class="header-large-input"
            control-variant="stacked"
            hide-controls
          />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.header-large-input :deep(input) {
  font-size: 2.2rem;
  font-weight: bold;
  width: 60px;
  text-align: center;
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-primary);
}
</style>
