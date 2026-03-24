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
</script>

<template>
  <v-container fluid class="character-sheet-container pa-4">
    <!-- Header Row (Split into smaller cards) -->
    <v-row dense>
      <v-col cols="12">
        <CharacterHeader />
      </v-col>
    </v-row>
    
    <v-row dense>
      <!-- Main Content Left -->
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

          <!-- Weapons & Armour Tables -->
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
        <ArmourSilhouette />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.character-sheet-container {
  background-color: var(--v-theme-background);
  min-height: 100vh;
}
</style>
