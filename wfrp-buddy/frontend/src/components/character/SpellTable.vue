<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100 grim-card" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Spells & Grimoire</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Spell</th>
          <th class="text-center">CN</th>
          <th class="text-center">Range</th>
          <th class="text-left">Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!store.char.Spells || store.char.Spells.length === 0">
           <td colspan="4" class="text-center text-grey py-4 placeholder-text">No spells memorized</td>
        </tr>
        <tr v-for="s in store.char.Spells" :key="s.Id">
          <td class="cell-bold">{{ s.Name }}</td>
          <td class="text-center cell-text">{{ s.CN }}</td>
          <td class="text-center cell-text">{{ s.Range }}</td>
          <td class="text-caption cell-text">{{ s.Effect }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
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
