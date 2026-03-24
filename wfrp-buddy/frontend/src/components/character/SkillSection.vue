<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 skills-section" elevation="4">
    <div class="text-overline mb-2 amber-lighten-2 px-2">Skills</div>
    <v-row dense>
      <v-col cols="12" md="4">
        <div class="skill-column-header text-center py-1 mb-1">Basic 1</div>
        <div class="placeholder-text px-2">Athletics, Charm, Dodge...</div>
      </v-col>
      <v-col cols="12" md="4" class="border-left">
        <div class="skill-column-header text-center py-1 mb-1">Basic 2</div>
        <div class="placeholder-text px-2">Melee (Basic), Perception...</div>
      </v-col>
      <v-col cols="12" md="4" class="border-left">
        <div class="skill-column-header text-center py-1 mb-1">Advanced</div>
        <div class="placeholder-text px-2">Language (Classical), Lore...</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.skills-section {
  background-color: #1e1e1e;
  border: 1px solid #333;
}

.skill-column-header {
  background-color: #252525;
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  border-bottom: 1px solid #444;
}

.border-left {
  border-left: 1px solid #333;
}

.placeholder-text {
  font-family: 'Crimson Text', serif;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 960px) {
  .border-left {
    border-left: none;
    border-top: 1px solid #333;
    padding-top: 8px;
  }
}
</style>
