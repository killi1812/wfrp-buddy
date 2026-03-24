<script setup lang="ts">
import CharacterHeader from './CharacterHeader.vue'
import CharacteristicsTable from './CharacteristicsTable.vue'
import ArmourSilhouette from './ArmourSilhouette.vue'
import SkillSection from './SkillSection.vue'
import TalentList from './TalentList.vue'
</script>

<template>
  <v-container fluid class="character-sheet-container pa-4">
    <v-row>
      <v-col cols="12">
        <CharacterHeader />
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <CharacteristicsTable />
          </v-col>
          <v-col cols="12">
             <SkillSection />
          </v-col>
          <v-col cols="12">
             <TalentList />
          </v-col>
        </v-row>
      </v-col>
      
      <v-col cols="12" md="4">
        <ArmourSilhouette />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.character-sheet-container {
  background-color: #121212;
  min-height: 100vh;
  color: #ddd;
}
</style>
