<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 skills-section" elevation="2">
    <div class="text-overline mb-2 text-primary px-2">Skills</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-center">Charac.</th>
          <th class="text-center">Adv.</th>
          <th class="text-center">Skill</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in store.char.skills" :key="s.name">
          <td class="font-weight-bold">{{ s.name }}</td>
          <td class="text-center text-caption">{{ s.characteristic }}</td>
          <td class="text-center pa-1">
            <v-text-field
              v-model.number="s.advances"
              hide-details
              density="compact"
              variant="plain"
              class="centered-input-adv"
              type="number"
            />
          </td>
          <td class="text-center font-weight-bold text-primary">
            {{ store.getSkillTotal(s) }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped>
.skills-section {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0,0,0,0.1);
}

.grim-table {
  background: transparent !important;
}

th {
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-primary) !important;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 0.75rem;
}

td {
  font-family: 'Crimson Text', serif;
}

.centered-input-adv :deep(input) {
  text-align: center;
  font-family: 'Crimson Text', serif;
  background-color: rgba(0,0,0,0.05);
  border-radius: 4px;
  width: 40px;
  margin: 0 auto;
}
</style>
