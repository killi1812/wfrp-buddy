<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 characteristics-table" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Characteristics</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left char-name-col"></th>
          <th v-for="c in store.char.characteristics" :key="c.name" class="text-center char-col">
            {{ c.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">Initial</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="pa-1">
            <v-number-input
              v-model="c.initial"
              @update:model-value="store.updateCharacteristic(c.name, 'initial', c.initial)"
              hide-details
              density="compact"
              variant="plain"
              class="centered-input"
              control-variant="stacked"
              hide-controls
            />
          </td>
        </tr>
        <tr>
          <td class="row-label">Advances</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="pa-1">
            <v-number-input
              v-model="c.advances"
              @update:model-value="store.updateCharacteristic(c.name, 'advances', c.advances)"
              hide-details
              density="compact"
              variant="plain"
              class="centered-input"
              control-variant="stacked"
              hide-controls
            />
          </td>
        </tr>
        <tr class="current-row">
          <td class="row-label text-primary font-weight-bold">Current</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="text-center text-h5 text-primary font-weight-bold py-1">
            {{ c.current }}
          </td>
        </tr>
        <tr class="bonus-row">
          <td class="row-label">Bonus</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="text-center text-h6 py-1">
            {{ Math.floor(c.current / 10) }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.characteristics-table {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0,0,0,0.1);
}

.section-title {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.grim-table {
  background: transparent !important;
}

.char-col {
  min-width: 45px;
  font-weight: bold;
  font-size: 1.1rem !important;
}

.char-name-col {
  min-width: 80px;
}

.row-label {
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}

.current-row {
  background-color: rgba(0,0,0,0.05);
}

.centered-input :deep(input) {
  text-align: center;
  font-family: 'Crimson Text', serif;
  font-size: 1.2rem;
}

:deep(.v-table__wrapper) {
  overflow-x: auto;
}
</style>
