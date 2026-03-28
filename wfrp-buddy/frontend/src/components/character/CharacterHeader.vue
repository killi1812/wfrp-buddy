<script setup lang="ts">
import PersonalInfoCard from './PersonalInfoCard.vue'
import StatusCard from './StatusCard.vue'
import PointsCard from './PointsCard.vue'

const props = defineProps<{
  name: string,
  career: any,
  status: any,
  description: any,
  movment: any,
  points: any,
  wounds: any
}>()
</script>

<template>
  <v-row dense>
    <v-col cols="12" md="4">
      <PersonalInfoCard 
        :name="props.name" 
        :career="props.career"
        :status="props.status"
        :description="props.description"
      />
    </v-col>
    <v-col cols="12" md="3">
      <StatusCard :movment="props.movment" :exp="props.points.Exp" />
    </v-col>
    <v-col cols="12" md="3">
      <PointsCard :points="props.points" />
    </v-col>
    <v-col cols="12" md="2">
      <v-card class="pa-4 header-sub-card d-flex flex-column align-center justify-center elevation-2">
        <div class="section-title mb-1">Wounds</div>
        <div class="d-flex align-center">
          <v-number-input
            v-model="props.wounds.Current"
            density="compact"
            variant="plain"
            hide-details
            class="header-large-input"
            control-variant="stacked"
            hide-controls
          />
          <div class="text-h4 mx-1 primary--text">/</div>
          <div class="text-h4 font-weight-bold primary--text">{{ props.wounds.Max }}</div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0,0,0,0.1);
  background-color: var(--v-theme-surface);
  /* Stabilize rendering */
  will-change: transform;
  transform: translateZ(0);
}

.header-large-input :deep(input) {
  font-size: 2.2rem;
  font-weight: bold;
  width: 60px;
  text-align: center;
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-primary);
}
</style>
