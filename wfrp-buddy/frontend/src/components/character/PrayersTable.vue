<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100 grim-card relative-pos" elevation="2">
    <!-- Sin Counter -->
    <div class="sin-counter-box d-flex align-center">
      <div class="section-title mr-2" style="font-size: 0.7rem">SIN</div>
      <v-number-input 
        v-model="store.char.Sin" 
        density="compact" 
        variant="outlined" 
        hide-details 
        control-variant="stacked" 
        hide-controls 
        class="sin-number-input" 
      />
    </div>

    <div class="text-h6 mb-2 text-primary px-2 section-title">Prayers & Blessings</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Prayer</th>
          <th class="text-center">Range</th>
          <th class="text-center">Duration</th>
          <th class="text-left">Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!store.char.Prayers || store.char.Prayers.length === 0">
           <td colspan="4" class="text-center text-grey py-4 placeholder-text">No prayers known</td>
        </tr>
        <tr v-for="p in store.char.Prayers" :key="p.Name">
          <td class="cell-bold">{{ p.Name }}</td>
          <td class="text-center cell-text">{{ p.Range }}</td>
          <td class="text-center cell-text">{{ p.Duration }}</td>
          <td class="text-caption cell-text">{{ p.Effect }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.relative-pos {
  position: relative;
}

.sin-counter-box {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  display: flex;
  align-items: center;
}

.sin-number-input {
  width: 60px;
}

.sin-number-input :deep(input) {
  text-align: center;
  font-weight: bold;
  font-family: 'Crimson Text', serif;
}

.cell-bold {
  font-size: 1.2rem;
  font-weight: bold;
}
.cell-text {
  font-size: 1.1rem;
}
.placeholder-text {
  font-size: 1.1rem;
  font-style: italic;
}
</style>
