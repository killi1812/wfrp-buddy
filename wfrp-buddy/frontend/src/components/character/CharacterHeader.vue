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
      <v-card class="pa-4 wounds-card h-100 d-flex flex-column align-center justify-center" elevation="2">
        <div class="text-overline text-primary">Wounds</div>
        <div class="d-flex align-center">
          <v-text-field
            v-model.number="store.currentWounds"
            type="number"
            density="compact"
            variant="plain"
            hide-details
            class="wounds-input"
          />
          <div class="text-h4 mx-1">/</div>
          <div class="text-h4 font-weight-bold">{{ store.maxWounds }}</div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.wounds-card {
  border: 2px solid var(--v-theme-primary);
  background-color: var(--v-theme-surface);
}
.wounds-input :deep(input) {
  font-size: 2.125rem;
  font-weight: 700;
  text-align: right;
  width: 50px;
  padding: 0;
  font-family: 'Crimson Text', serif;
}
.text-overline {
  font-family: 'Crimson Text', serif;
}
</style>
