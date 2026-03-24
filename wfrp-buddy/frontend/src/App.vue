<template>
  <v-app>
    <SnackbarProvider>
      <router-view />
    </SnackbarProvider>
  </v-app>
</template>

<script lang="ts" setup>
import SnackbarProvider from "@/components/general/SnackbarProvider.vue";
import "./styles/global.css"
</script>

<style>
/* Reset any global styles that might interfere */
html, body {
  overflow: hidden !important;
  height: 100vh;
}
</style>
