<template>
  <v-app>
    <SnackbarProvider>
      <v-main>
        <router-view />
      </v-main>
    </SnackbarProvider>
  </v-app>
</template>

<script lang="ts" setup>
import SnackbarProvider from "@/components/general/SnackbarProvider.vue";
import "./styles/global.css"
//
</script>
