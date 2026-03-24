<script setup lang="ts">
import CharacterHeader from './CharacterHeader.vue'
import CharacteristicsTable from './CharacteristicsTable.vue'
import ArmourSilhouette from './ArmourSilhouette.vue'
import SkillSection from './SkillSection.vue'
import TalentList from './TalentList.vue'
import WeaponTable from './WeaponTable.vue'
import ArmourTable from './ArmourTable.vue'
import TrappingsTable from './TrappingsTable.vue'
import PrayersTable from './PrayersTable.vue'
import AmbitionsPartyCard from './AmbitionsPartyCard.vue'
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

            <!-- Weapons & Armour -->
            <v-col cols="12" md="6">
              <WeaponTable />
            </v-col>
            <v-col cols="12" md="6">
              <ArmourTable />
            </v-col>

            <!-- Trappings & Prayers -->
            <v-col cols="12" md="6">
              <TrappingsTable />
            </v-col>
            <v-col cols="12" md="6">
              <PrayersTable />
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
              <AmbitionsPartyCard />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.scroll-wrapper {
  /* This is the key scroll container now */
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--v-theme-background);
}

.character-sheet-container {
  min-height: 100%;
}

/* Custom scrollbar to match the theme */
.scroll-wrapper::-webkit-scrollbar {
  width: 10px;
}

.scroll-wrapper::-webkit-scrollbar-track {
  background: var(--v-theme-background);
}

.scroll-wrapper::-webkit-scrollbar-thumb {
  background: var(--v-theme-primary);
  border-radius: 5px;
}

.scroll-wrapper::-webkit-scrollbar-thumb:hover {
  background: #d4a017;
}
</style>
