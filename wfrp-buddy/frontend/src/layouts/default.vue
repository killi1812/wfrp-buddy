<template>
  <v-app class="wails-layout">
    <AppHeader />

    <v-main class="scrollable-content">
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
  overflow: hidden;
}

.scrollable-content {
  height: calc(100vh - 60px - 40px); /* AppBar 60px, Footer 40px */
  overflow-y: auto;
  background-color: var(--v-theme-background);
}

/* Custom scrollbar to match the theme */
.scrollable-content::-webkit-scrollbar {
  width: 8px;
}

.scrollable-content::-webkit-scrollbar-track {
  background: var(--v-theme-background);
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: var(--v-theme-primary);
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: #d4a017;
}
</style>
