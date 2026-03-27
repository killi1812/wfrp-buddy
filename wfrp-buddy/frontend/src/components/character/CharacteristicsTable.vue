<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()

const characteristicKeys = [
  'WeaponSkill', 'BalisticSkill', 'Strength', 'Toughnes', 'Initative',
  'Agility', 'Dexterity', 'Inteligence', 'Willpower', 'Fellowhip'
] as const

type CharKey = typeof characteristicKeys[number]

const labels: Record<string, string> = {
  WeaponSkill: 'WS', BalisticSkill: 'BS', Strength: 'S', Toughnes: 'T', Initative: 'I',
  Agility: 'Ag', Dexterity: 'Dex', Inteligence: 'Int', Willpower: 'WP', Fellowhip: 'Fel'
}
</script>

<template>
  <v-card class="pa-2 characteristics-table" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Characteristics</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left char-name-col"></th>
          <th v-for="key in characteristicKeys" :key="key" class="text-center char-col">
            {{ labels[key] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-label">Initial</td>
          <td v-for="key in characteristicKeys" :key="key" class="pa-1">
            <v-number-input v-model="store.char.Characteristics[key].Basic" hide-details density="compact"
              variant="plain" class="centered-input" control-variant="stacked" hide-controls />
          </td>
        </tr>
        <tr>
          <td class="row-label">Advances</td>
          <td v-for="key in characteristicKeys" :key="key" class="pa-1">
            <v-number-input v-model="store.char.Characteristics[key].Advances" hide-details density="compact"
              variant="plain" class="centered-input" control-variant="stacked" hide-controls />
          </td>
        </tr>
        <tr class="current-row">
          <td class="row-label text-primary font-weight-bold">Current</td>
          <td v-for="key in characteristicKeys" :key="key"
            class="text-center text-h5 text-primary font-weight-bold py-1">
            {{ store.char.Characteristics[key].Basic + store.char.Characteristics[key].Advances }}
          </td>
        </tr>
        <tr class="bonus-row">
          <td class="row-label">Bonus</td>
          <td v-for="key in characteristicKeys" :key="key" class="text-center text-h6 py-1">
            {{ Math.floor((store.char.Characteristics[key].Basic + store.char.Characteristics[key].Advances) / 10) }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.characteristics-table {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  background-color: rgba(0, 0, 0, 0.05);
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
