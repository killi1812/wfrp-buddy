<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 h-100" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Armour List</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Armour</th>
          <th class="text-center">Location</th>
          <th class="text-center">AP</th>
          <th class="text-left">Qualities</th>
        </tr>
      </thead>
      <tbody>
        <!-- Check if Armour object exists and has a Name -->
        <tr v-if="store.char.Armour && store.char.Armour.Name">
          <td class="cell-bold">{{ store.char.Armour.Name }}</td>
          <td class="text-center cell-text">{{ store.char.Armour.Location }}</td>
          <td class="text-center cell-bold text-primary">{{ store.char.Armour.ArmourPoints }}</td>
          <td class="text-caption cell-text">
            {{store.char.Armour.Qualities?.map(q => q.Name).join(', ')}}
          </td>
        </tr>
        <tr v-else>
          <td colspan="4" class="text-center text-grey py-4 placeholder-text">No armour equipped</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.section-title {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

th {
  font-family: 'Crimson Text', serif;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 1rem !important;
  color: var(--v-theme-primary) !important;
}

td {
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
