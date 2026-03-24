<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 grim-card h-100 elevation-2">
    <div class="text-h6 mb-2 text-primary section-title">Wealth</div>
    <v-row dense>
      <v-col cols="4">
        <v-number-input 
          v-model="store.char.Welth.GoldCrown" 
          label="GC" 
          variant="outlined" 
          density="compact" 
          hide-details 
          control-variant="stacked" 
          hide-controls 
          class="wealth-input"
        />
      </v-col>
      <v-col cols="4">
        <v-number-input 
          v-model="store.char.Welth.SilverShilling" 
          label="SS" 
          variant="outlined" 
          density="compact" 
          hide-details 
          control-variant="stacked" 
          hide-controls 
          class="wealth-input"
        />
      </v-col>
      <v-col cols="4">
        <v-number-input 
          v-model="store.char.Welth.BrassPenny" 
          label="D" 
          variant="outlined" 
          density="compact" 
          hide-details 
          control-variant="stacked" 
          hide-controls 
          class="wealth-input"
        />
      </v-col>
    </v-row>
    <div class="text-caption text-center mt-2 text-subtext italic-font">
      1 GC = 20 SS = 240 D
    </div>
  </v-card>
</template>

<style scoped>
.wealth-input :deep(input) {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Crimson Text', serif;
}

.italic-font {
  font-style: italic;
  font-family: 'Crimson Text', serif;
}
</style>
