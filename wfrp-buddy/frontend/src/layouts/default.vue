<template>
  <v-app class="wails-layout">
    <AppHeader />

    <v-main class="layout-main">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/general/AppHeader.vue";
import AppFooter from "@/components/general/AppFooter.vue";
</script>

<style scoped>
.wails-layout {
  height: 100vh;
  /* Removed hardware acceleration transforms from root as they can conflict with fixed bars */
}

.layout-main {
  /* Ensure v-main takes full height to allow internal scrolling components to function */
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
