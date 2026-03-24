<template>
  <TabsLayout :startTab="startTab" />
</template>

<script setup lang="ts">
import TabsLayout from '@/components/general/TabsLayout.vue'
import CharacterSheet from '@/components/character/CharacterSheet.vue'
import { TabItem } from '@/types/TabItem'
import { markRaw } from 'vue'

const startTab: TabItem = {
  key: 'character-sheet',
  titleKey: 'Character Sheet',
  content: markRaw(CharacterSheet),
  showClose: false
}
</script>
