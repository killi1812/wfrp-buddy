<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 characteristics-table" elevation="2">
    <div class="text-overline mb-2 text-primary px-2">Characteristics</div>
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
          <td class="text-overline">Initial</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="pa-1">
            <v-text-field
              v-model.number="c.initial"
              @update:model-value="store.updateCharacteristic(c.name, 'initial', c.initial)"
              hide-details
              density="compact"
              variant="plain"
              class="centered-input"
              type="number"
            />
          </td>
        </tr>
        <tr>
          <td class="text-overline">Advances</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="pa-1">
            <v-text-field
              v-model.number="c.advances"
              @update:model-value="store.updateCharacteristic(c.name, 'advances', c.advances)"
              hide-details
              density="compact"
              variant="plain"
              class="centered-input"
              type="number"
            />
          </td>
        </tr>
        <tr class="current-row">
          <td class="text-overline text-primary">Current</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="text-center text-h6 text-primary font-weight-bold py-1">
            {{ c.current }}
          </td>
        </tr>
        <tr class="bonus-row">
          <td class="text-overline">Bonus</td>
          <td v-for="c in store.char.characteristics" :key="c.name" class="text-center text-subtitle-1 py-1">
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

.grim-table {
  background: transparent !important;
}

.char-col {
  min-width: 45px;
  font-weight: bold;
}

.char-name-col {
  min-width: 80px;
}

.current-row {
  background-color: rgba(0,0,0,0.05);
}

.centered-input :deep(input) {
  text-align: center;
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}

.text-overline {
  font-family: 'Crimson Text', serif;
  letter-spacing: 0.1em;
}

:deep(.v-table__wrapper) {
  overflow-x: auto;
}
</style>
