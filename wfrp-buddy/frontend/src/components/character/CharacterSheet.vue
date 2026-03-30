<script setup lang="ts">
import { GetCharacter } from 'bindings/changeme/service/charactersrv'
import { onMounted, ref } from 'vue'
import * as model from '../../../bindings/changeme/model'
import { useSnackbar } from '../general/SnackbarProvider.vue'
import AmbitionsPartyCard from './AmbitionsPartyCard.vue'
import ArmourSilhouette from './ArmourSilhouette.vue'
import ArmourTable from './ArmourTable.vue'
import CharacterHeader from './CharacterHeader.vue'
import CharacteristicsTable from './CharacteristicsTable.vue'
import CorruptionPsychologyCard from './CorruptionPsychologyCard.vue'
import PrayersTable from './PrayersTable.vue'
import SkillSection from './SkillSection.vue'
import SpellTable from './SpellTable.vue'
import TalentList from './TalentList.vue'
import TrappingsTable from './TrappingsTable.vue'
import WealthCard from './WealthCard.vue'
import WeaponTable from './WeaponTable.vue'

const props = defineProps<{
  characterId?: string // Passed directly via v-bind="item.args" in TabsLayout
}>()

const snackbar = useSnackbar()
const showPrayers = ref(false)

const character = ref<model.CaracterDetails | null>()

onMounted(async () => {
  if (!props.characterId) {
    return
  }
  try {
    const rez = await GetCharacter(props.characterId)
    character.value = rez
  } catch {
    snackbar.Error("Failed to load character")
  }
})

const getSkillTotal = (skill: any) => {
  if (!character.value) return 0
  // @ts-ignore
  const c = character.value.Characteristics[skill.BaseChar]
  return (c ? (c.Basic + c.Advances) : 0) + skill.Advances
}

</script>

<template>
  <div v-if="character" class="scroll-wrapper">
    <v-container fluid class="character-sheet-container pa-4">
      <!-- Header Row -->
      <v-row dense>
        <v-col cols="12">
          <CharacterHeader :name="character.Name" :career="character.Career" :status="character.Status"
            :description="character.Description" :movment="character.Movment" :points="character.Points"
            :wounds="character.Wounds" :species="character.Species" />
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
              <SkillSection :skills="character.Skills" :getSkillTotal="getSkillTotal" />
            </v-col>
            <v-col cols="12" md="6">
              <TalentList :talents="character.Talents" />
            </v-col>

            <!-- Combat -->
            <v-col cols="12" md="6">
              <WeaponTable :weapons="character.Weapons" />
            </v-col>
            <v-col cols="12" md="6">
              <ArmourTable :armour="character.Armour" />
            </v-col>

            <!-- Magic & Faith -->
            <v-col cols="12">
              <div class="d-flex align-center mb-1 px-2">
                <v-checkbox v-model="showPrayers" label="Show Prayers instead of Spells" density="compact" hide-details
                  color="primary" class="toggle-magic-faith" />
              </div>
              <transition name="fade" mode="out-in">
                <div v-if="showPrayers" key="prayers">
                  <PrayersTable :prayers="character.Prayers" :sin="character.Sin"
                    @update:sin="character.Sin = $event" />
                </div>
                <div v-else key="spells">
                  <SpellTable :spells="character.Spells" />
                </div>
              </transition>
            </v-col>

            <!-- Gear -->
            <v-col cols="12">
              <TrappingsTable :trappings="character.Trappings" />
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
