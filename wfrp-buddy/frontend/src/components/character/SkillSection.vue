<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-2 skills-section" elevation="2">
    <div class="text-h6 mb-2 text-primary px-2 section-title">Skills</div>
    <v-table density="compact" class="grim-table">
      <thead>
        <tr>
          <th class="text-left skill-col">Name</th>
          <th class="text-center">Charac.</th>
          <th class="text-center">Adv.</th>
          <th class="text-center">Skill</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in store.char.skills" :key="s.name">
          <td class="skill-name">{{ s.name }}</td>
          <td class="text-center text-subtitle-2">{{ s.characteristic }}</td>
          <td class="text-center pa-1">
            <v-number-input
              v-model="s.advances"
              hide-details
              density="compact"
              variant="plain"
              class="centered-input-adv"
              control-variant="stacked"
              hide-controls
            />
          </td>
          <td class="text-center skill-total text-primary">
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

.section-title {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.grim-table {
  background: transparent !important;
}

th {
  font-family: 'Crimson Text', serif;
  color: var(--v-theme-primary) !important;
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 1rem !important;
}

td {
  font-family: 'Crimson Text', serif;
}

.skill-col {
  width: 40%;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.skill-total {
  font-size: 1.3rem;
  font-weight: bold;
}

.centered-input-adv :deep(input) {
  text-align: center;
  font-family: 'Crimson Text', serif;
  background-color: rgba(0,0,0,0.05);
  border-radius: 4px;
  width: 50px;
  margin: 0 auto;
  font-size: 1.2rem;
}
</style>
