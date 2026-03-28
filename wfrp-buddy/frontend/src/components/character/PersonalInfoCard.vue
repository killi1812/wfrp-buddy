<script setup lang="ts">
const props = defineProps<{
  name: string,
  career: any,
  status: any,
  description: any
}>()
</script>

<template>
  <v-card class="pa-4 header-sub-card" elevation="2">
    <div class="text-h6 mb-2 text-primary section-title">Personal Info</div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field v-model="props.name" label="Name" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="props.career.Species" label="Species" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="props.career.Class" label="Class" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="props.career.Career" label="Career" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-number-input v-model="props.career.CareerTier" label="Tier" variant="outlined" density="compact" hide-details class="mb-2" control-variant="stacked" hide-controls />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="props.career.CareerPath" label="Path" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="props.status.Tier" label="Status" variant="outlined" density="compact" hide-details class="mb-2" />
      </v-col>
      
      <v-col cols="12">
        <v-number-input v-model="props.description.Age" label="Age" variant="outlined" density="compact" hide-details class="mb-2" control-variant="stacked" hide-controls />
      </v-col>

      <v-col cols="4">
        <v-text-field v-model="props.description.Height" label="Height" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="props.description.Hair" label="Hair" variant="outlined" density="compact" hide-details />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="props.description.Eyes" label="Eyes" variant="outlined" density="compact" hide-details />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0,0,0,0.1);
  background-color: var(--v-theme-surface);
  /* Stabilize rendering */
  will-change: transform;
  transform: translateZ(0);
}
</style>
