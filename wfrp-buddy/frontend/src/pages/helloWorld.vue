<template>
  <TabsLayout :start-tab="startTab" :items="otherTabs" />
</template>
<script setup lang="ts">
import CompTwo from '@/components/general/compTwo.vue';
import Test from '@/components/general/Test.vue';
import { Tab } from '@/types/TabItem';

// Variables
const startTab: Tab = { key: 'main', titleKey: 'Main tab', content: Test }
const otherTabs: Tab[] = [
  { key: 'comp2', titleKey: 'Other tab', content: CompTwo }
]


</script>

<style lang="css" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
