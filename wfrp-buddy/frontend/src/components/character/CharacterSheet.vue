<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '@/stores/character'
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

const store = useCharacterStore()
const showPrayers = ref(false)
</script>

<template>
  <div class="scroll-wrapper">
    <v-container fluid class="character-sheet-container pa-4">
      <!-- Header Row -->
      <v-row dense>
        <v-col cols="12">
          <CharacterHeader :name="store.char.Name" :career="store.char.Career" :status="store.char.Status"
            :description="store.char.Description" :movment="store.char.Movment" :points="store.char.Points"
            :wounds="store.char.Wounds" />
        </v-col>
      </v-row>

      <v-row dense class="mt-2">
        <!-- Left Column -->
        <v-col cols="12" md="8">
          <v-row dense>
            <!-- Characteristics -->
            <v-col cols="12">
              <CharacteristicsTable :characteristics="store.char.Characteristics" />
            </v-col>

            <!-- Skills & Talents -->
            <v-col cols="12" md="6">
              <SkillSection :skills="store.char.Skills" :getSkillTotal="store.getSkillTotal" @add="store.addItem('Skills', $event)" @remove="(idx) => store.removeItem('Skills', idx)" />
            </v-col>
            <v-col cols="12" md="6">
              <TalentList :talents="store.char.Talents" @add="store.addItem('Talents', $event)"
                @remove="(idx) => store.removeItem('Talents', idx)" />
            </v-col>

            <!-- Combat -->
            <v-col cols="12" md="6">
              <WeaponTable :weapons="store.char.Weapons" @add="store.addItem('Weapons', $event)"
                @remove="(idx) => store.removeItem('Weapons', idx)" />
            </v-col>
            <v-col cols="12" md="6">
              <ArmourTable :armour="store.char.Armour" @add="store.addItem('Armour', $event)"
                @remove="(idx) => store.removeItem('Armour', idx)" />
            </v-col>

            <!-- Magic & Faith (Toggled) -->
            <v-col cols="12">
              <div class="d-flex align-center mb-1 px-2">
                <v-checkbox v-model="showPrayers" label="Show Prayers instead of Spells" density="compact" hide-details
                  color="primary" class="toggle-magic-faith" />
              </div>
              <transition name="fade" mode="out-in">
                <div v-if="showPrayers" key="prayers">
                  <PrayersTable :prayers="store.char.Prayers" :sin="store.char.Sin"
                    @update:sin="store.char.Sin = $event" @add="store.addItem('Prayers', $event)"
                    @remove="(idx) => store.removeItem('Prayers', idx)" />
                </div>
                <div v-else key="spells">
                  <SpellTable :spells="store.char.Spells" @add="store.addItem('Spells', $event)"
                    @remove="(idx) => store.removeItem('Spells', idx)" />
                </div>
              </transition>
            </v-col>

            <!-- Gear -->
            <v-col cols="12">
              <TrappingsTable :trappings="store.char.Trappings" @add="store.addItem('Trappings', $event)"
                @remove="(idx) => store.removeItem('Trappings', idx)" />
            </v-col>
          </v-row>
        </v-col>

        <!-- Right Sidebar -->
        <v-col cols="12" md="4">
          <v-row dense>
            <v-col cols="12">
              <ArmourSilhouette :armour="store.char.Armour" />
            </v-col>
            <v-col cols="12">
              <WealthCard :wealth="store.char.Welth" />
            </v-col>
            <v-col cols="12">
              <AmbitionsPartyCard :ambitions="store.char.Ambitions" :party="store.char.Party" />
            </v-col>
            <v-col cols="12">
              <CorruptionPsychologyCard :corruption="store.char.Corruption" :psychology="store.char.Psychology"
                @update:psychology="store.char.Psychology = $event" />
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
