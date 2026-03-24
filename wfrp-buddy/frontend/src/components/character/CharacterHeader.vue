<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()
</script>

<template>
  <v-card class="pa-4 character-header" elevation="4">
    <v-row dense>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="store.char.name"
          label="Name"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="store.char.career"
          label="Career"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="store.char.path"
          label="Career Path"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6" sm="2">
        <v-text-field
          v-model="store.char.status"
          label="Status"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="6" sm="1">
        <v-text-field
          v-model.number="store.char.age"
          label="Age"
          type="number"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="6" sm="1">
        <v-text-field
          v-model.number="store.char.movement"
          label="Move"
          type="number"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="6" sm="2">
        <v-text-field
          v-model.number="store.char.experience"
          label="Exp"
          type="number"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="6" sm="2">
        <v-text-field
          v-model.number="store.char.fate"
          label="Fate"
          type="number"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="6" sm="2">
        <v-text-field
          v-model.number="store.char.resilience"
          label="Resilience"
          type="number"
          variant="outlined"
          density="compact"
          color="amber-lighten-2"
        />
      </v-col>
      <v-col cols="6" sm="2">
        <div class="wounds-badge text-center py-2">
          <div class="text-overline">Wounds</div>
          <div class="text-h6 amber-lighten-2">{{ store.wounds }}</div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.character-header {
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 4px;
}

.wounds-badge {
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #252525;
}

:deep(.v-field__label) {
  font-family: 'Crimson Text', serif;
  color: #888;
}

:deep(.v-field__input) {
  font-family: 'Crimson Text', serif;
}
</style>
