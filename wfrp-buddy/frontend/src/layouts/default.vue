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
  /* Let v-app fill the screen */
  height: 100vh;
  overflow: hidden;
}

.layout-main {
  /* v-main with 'app' props on bar/footer handles its own padding */
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
