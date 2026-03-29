<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import { useUIStore } from '@/stores/ui'
import CharacterSheet from './CharacterSheet.vue'
import { markRaw } from 'vue'

const props = defineProps<{
  open: (item: any) => void
}>()

const store = useCharacterStore()
const uiStore = useUIStore()

const select = (char: any) => {
  props.open({
    key: `char-${char.CaracterId}`,
    titleKey: char.Name,
    content: markRaw(CharacterSheet),
    showClose: false,
    showCloseTab: true,
    args: { characterId: char.CaracterId }
  })
}
</script>

<template>
  <v-container>
    <div class="d-flex align-center justify-space-between mb-6 ">
      <div class="text-h4 text-primary section-title">Characters</div>

      <div class="d-flex align-center gap-2">
        <!-- New Character Button -->
        <v-btn color="primary" variant="elevated" prepend-icon="mdi-plus" density="comfortable" class="mr-4" disabled>
          New Character
        </v-btn>

        <!-- View Toggle using UI Store -->
        <v-btn-toggle v-model="uiStore.characterListViewMode" mandatory color="primary" density="compact"
          variant="outlined">
          <v-btn value="grid" icon="mdi-view-grid-outline" />
          <v-btn value="list" icon="mdi-view-list" />
        </v-btn-toggle>
      </div>
    </div>

    <v-window v-model="uiStore.characterListViewMode" disabled>
      <!-- GRID VIEW -->
      <v-window-item value="grid" class="pa-1">
        <v-row>
          <v-col v-for="char in store.characters" :key="char.CaracterId" cols="12" sm="6" md="4">
            <v-card class="grim-card char-card pa-4" @click="select(char)" hover elevation="4">
              <div class="d-flex align-center mb-4">
                <v-avatar color="primary" size="64" class="mr-4">
                  <span class="text-h4 text-white">{{ char.Name.charAt(0) }}</span>
                </v-avatar>
                <div>
                  <div class="text-h5 font-weight-bold">{{ char.Name }}</div>
                  <div class="text-subtitle-1 text-grey">{{ char.Species }} • {{ char.Career.Career }}</div>
                </div>
              </div>
              <v-divider class="mb-4" />
              <v-row dense class="text-center">
                <v-col cols="4">
                  <div class="text-caption text-grey">WS</div>
                  <div class="text-h6">{{ char.Characteristics.WeaponSkill.Basic +
                    char.Characteristics.WeaponSkill.Advances }}</div>
                </v-col>
                <v-col cols="4">
                  <div class="text-caption text-grey">BS</div>
                  <div class="text-h6">{{ char.Characteristics.BalisticSkill.Basic +
                    char.Characteristics.BalisticSkill.Advances }}</div>
                </v-col>
                <v-col cols="4">
                  <div class="text-caption text-grey">Wounds</div>
                  <div class="text-h6 text-primary">{{ char.Wounds.Max }}</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- LIST VIEW -->
      <v-window-item value="list">
        <v-card class="grim-card">
          <v-table density="comfortable" class="grim-table">
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Species</th>
                <th class="text-left">Career</th>
                <th class="text-center">WS</th>
                <th class="text-center">BS</th>
                <th class="text-center">Wounds</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="char in store.characters" :key="char.CaracterId" class="list-row" @click="select(char)">
                <td class="font-weight-bold text-h6">{{ char.Name }}</td>
                <td>{{ char.Species }}</td>
                <td>{{ char.Career.Career }}</td>
                <td class="text-center">{{ char.Characteristics.WeaponSkill.Basic +
                  char.Characteristics.WeaponSkill.Advances }}</td>
                <td class="text-center">{{ char.Characteristics.BalisticSkill.Basic +
                  char.Characteristics.BalisticSkill.Advances }}</td>
                <td class="text-center text-primary font-weight-bold">{{ char.Wounds.Max }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<style scoped>
.char-card {
  transition: transform 0.2s;
  cursor: pointer;
}

.char-card:hover {
  transform: translateY(-4px);
  border-color: var(--v-theme-primary) !important;
}

.list-row {
  cursor: pointer;
  transition: background-color 0.2s;
}

.list-row:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

.gap-2 {
  gap: 0.5rem;
}
</style>
