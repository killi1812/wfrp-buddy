<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCharacterStore } from '@/stores/character'
import { useRouter } from 'vue-router'
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

const props = defineProps<{
  characterId?: string // Passed directly via v-bind="item.args" in TabsLayout
}>()

const store = useCharacterStore()
const router = useRouter()
const showPrayers = ref(false)

const character = computed(() => {
  return store.characters.find(c => c.CaracterId === props.characterId)
})


</script>

<template>
  <div v-if="character" class="scroll-wrapper">
    <v-container fluid class="character-sheet-container pa-4">
      <!-- Header Row -->
      <v-row dense>
        <v-col cols="12">
          <CharacterHeader :name="character.Name" :career="character.Career" :status="character.Status"
            :description="character.Description" :movment="character.Movment" :points="character.Points"
            :wounds="character.Wounds" />
        </v-col>
      </v-row>

      <v-row dense class="mt-2">
        <!-- Left Column -->
        <v-col cols="12" md="8">
          <v-row dense>
            <!-- Characteristics -->
            <v-col cols="12">
              <CharacteristicsTable :characteristics="character.Characteristics" />
            </v-col>

            <!-- Skills & Talents -->
            <v-col cols="12" md="6">
              <SkillSection :skills="character.Skills" :getSkillTotal="store.getSkillTotal"
                @add="store.addItem('Skills', $event)" @remove="(idx) => store.removeItem('Skills', idx)" />
            </v-col>
            <v-col cols="12" md="6">
              <TalentList :talents="character.Talents" @add="store.addItem('Talents', $event)"
                @remove="(idx) => store.removeItem('Talents', idx)" />
            </v-col>

            <!-- Combat -->
            <v-col cols="12" md="6">
              <WeaponTable :weapons="character.Weapons" @add="store.addItem('Weapons', $event)"
                @remove="(idx) => store.removeItem('Weapons', idx)" />
            </v-col>
            <v-col cols="12" md="6">
              <ArmourTable :armour="character.Armour" @add="store.addItem('Armour', $event)"
                @remove="(idx) => store.removeItem('Armour', idx)" />
            </v-col>

            <!-- Magic & Faith -->
            <v-col cols="12">
              <div class="d-flex align-center mb-1 px-2">
                <v-checkbox v-model="showPrayers" label="Show Prayers instead of Spells" density="compact" hide-details
                  color="primary" class="toggle-magic-faith" />
              </div>
              <transition name="fade" mode="out-in">
                <div v-if="showPrayers" key="prayers">
                  <PrayersTable :prayers="character.Prayers" :sin="character.Sin" @update:sin="character.Sin = $event"
                    @add="store.addItem('Prayers', $event)" @remove="(idx) => store.removeItem('Prayers', idx)" />
                </div>
                <div v-else key="spells">
                  <SpellTable :spells="character.Spells" @add="store.addItem('Spells', $event)"
                    @remove="(idx) => store.removeItem('Spells', idx)" />
                </div>
              </transition>
            </v-col>

            <!-- Gear -->
            <v-col cols="12">
              <TrappingsTable :trappings="character.Trappings" @add="store.addItem('Trappings', $event)"
                @remove="(idx) => store.removeItem('Trappings', idx)" />
            </v-col>
          </v-row>
        </v-col>

        <!-- Right Sidebar -->
        <v-col cols="12" md="4">
          <v-row dense>
            <v-col cols="12">
              <ArmourSilhouette :armour="character.Armour" />
            </v-col>
            <v-col cols="12">
              <WealthCard :wealth="character.Welth" />
            </v-col>
            <v-col cols="12">
              <AmbitionsPartyCard :ambitions="character.Ambitions" :party="character.Party" />
            </v-col>
            <v-col cols="12">
              <CorruptionPsychologyCard :corruption="character.Corruption" :psychology="character.Psychology"
                @update:psychology="character.Psychology = $event" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else class="fill-height d-flex align-center justify-center">
    <div class="text-h5 text-grey italic-font">No character loaded (ID: {{ characterId }})...</div>
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

.italic-font {
  font-style: italic;
  font-family: 'Crimson Text', serif;
}
</style>
