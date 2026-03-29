<template>
  <TabsLayout :startTab="startTab" />
</template>

<script setup lang="ts">
import TabsLayout, { Tab } from '@/components/general/TabsLayout.vue'
import CharacterSelection from '@/components/character/CharacterSelection.vue'
import { markRaw } from 'vue'

const startTab: Tab = {
  key: 'character-selection',
  titleKey: 'Character List',
  content: markRaw(CharacterSelection),
  showClose: false,
}
</script>
