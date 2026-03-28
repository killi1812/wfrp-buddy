<script setup lang="ts">
import { ref } from 'vue'
import CharacterHeader from './CharacterHeader.vue'
import CharacteristicsTable from './CharacteristicsTable.vue'
import ArmourSilhouette from './ArmourSilhouette.vue'
import SkillSection from './SkillSection.vue'
import TalentList from './TalentList.vue'
import WeaponTable from './WeaponTable.vue'
import ArmourTable from './ArmourTable.vue'
import TrappingsTable from './TrappingsTable.vue'
import PrayersTable from './PrayersTable.vue'
import SpellTable from './SpellTable.vue'
import AmbitionsPartyCard from './AmbitionsPartyCard.vue'
import WealthCard from './WealthCard.vue'
import CorruptionPsychologyCard from './CorruptionPsychologyCard.vue'

const showPrayers = ref(false)
</script>

<template>
  <div class="scroll-wrapper">
    <v-container fluid class="character-sheet-container pa-4">
      <!-- Header Row -->
      <v-row dense>
        <v-col cols="12">
          <CharacterHeader />
        </v-col>
      </v-row>

      <v-row dense class="mt-2">
        <!-- Left Column -->
        <v-col cols="12" md="8">
          <v-row dense>
            <!-- Characteristics -->
            <v-col cols="12">
              <CharacteristicsTable />
            </v-col>

            <!-- Skills & Talents -->
            <v-col cols="12" md="6">
              <SkillSection />
            </v-col>
            <v-col cols="12" md="6">
              <TalentList />
            </v-col>

            <!-- Combat -->
            <v-col cols="12" md="6">
              <WeaponTable />
            </v-col>
            <v-col cols="12" md="6">
              <ArmourTable />
            </v-col>

            <!-- Magic & Faith (Toggled) -->
            <v-col cols="12">
              <div class="d-flex align-center mb-1 px-2">
                <v-checkbox v-model="showPrayers" label="Show Prayers instead of Spells" density="compact" hide-details
                  color="primary" class="toggle-magic-faith" />
              </div>
              <transition name="fade" mode="out-in">
                <div v-if="showPrayers" key="prayers">
                  <PrayersTable />
                </div>
                <div v-else key="spells">
                  <SpellTable />
                </div>
              </transition>
            </v-col>

            <!-- Gear -->
            <v-col cols="12">
              <TrappingsTable />
            </v-col>
          </v-row>
        </v-col>

        <!-- Right Sidebar -->
        <v-col cols="12" md="4">
          <v-row dense>
            <v-col cols="12">
              <ArmourSilhouette />
            </v-col>
            <v-col cols="12">
              <WealthCard />
            </v-col>
            <v-col cols="12">
              <AmbitionsPartyCard />
            </v-col>
            <v-col cols="12">
              <CorruptionPsychologyCard />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.scroll-wrapper {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--v-theme-background);
}

.character-sheet-container {
  min-height: 100%;
}

.toggle-magic-faith :deep(label) {
  font-family: 'Crimson Text', serif;
  font-style: italic;
  font-size: 0.9rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
