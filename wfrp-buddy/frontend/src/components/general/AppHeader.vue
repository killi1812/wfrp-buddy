<template>
  <v-app-bar color="primary" :elevation="8" height="60" app>
    <v-app-bar-nav-icon class="text-white" @click="open = !open" />
    <img id="logo" src="../../assets/logo.png" alt="logo" class="ml-2" />
    <v-app-bar-title class="ml-2 text-white font-weight-bold uppercase">WFRP BUDDY</v-app-bar-title>
    
    <v-spacer />
    
    <v-btn icon @click="goBack" class="text-white">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <!-- Profile Menu -->
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" class="text-white">
          <v-icon :icon="route.path === '/profile' ? 'mdi-account-circle' : 'mdi-account-circle-outline'" />
        </v-btn>
      </template>
      <v-list density="compact">
        <v-list-item to="/profile" prepend-icon="mdi-account" title="My Profile" />
        <v-list-item @click="handleLogout" prepend-icon="mdi-logout" title="Logout" />
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :rail="!open"
    rail-width="60"
    location="left"
    permanent
    persistent
    elevation="2"
    color="surface"
    class="sidebar-offset"
  >
    <v-list nav density="compact">
      <!-- Information section -->
      <v-list-item v-show="open" readonly class="text-caption text-uppercase text-grey">Information</v-list-item>
      <v-divider v-show="open"></v-divider>
      
      <v-list-item 
        to="/" 
        :prepend-icon="route.path === '/' ? 'mdi-home' : 'mdi-home-outline'" 
        title="Home" 
        color="primary" 
      />
      <v-list-item 
        to="/character-sheet" 
        :prepend-icon="route.path === '/character-sheet' ? 'mdi-account-details' : 'mdi-account-details-outline'" 
        title="Character Sheet" 
        color="primary" 
      />

      <!-- Help section -->
      <v-list-item v-show="open" readonly class="text-caption text-uppercase text-grey mt-4">Help</v-list-item>
      <v-divider v-show="open"></v-divider>
      
      <v-list-item 
        to="/help" 
        :prepend-icon="route.path === '/help' ? 'mdi-help-circle' : 'mdi-help-circle-outline'" 
        title="Help" 
        color="primary" 
      />
      <v-list-item 
        to="/about" 
        :prepend-icon="route.path === '/about' ? 'mdi-information' : 'mdi-information-outline'" 
        title="About" 
        color="primary" 
      />

      <!-- Exit -->
      <v-divider class="my-2"></v-divider>
      <v-tooltip :disabled="open" text="Program End" location="right">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" @click="handleQuit" prepend-icon="mdi-power" title="Exit" color="error" />
        </template>
      </v-tooltip>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBackStore } from "@/stores/app"

const open = ref(false) // Default to collapsed (small)
const drawer = ref(true) // Always present
const router = useRouter()
const route = useRoute()
const back = useBackStore()

const goBack = async () => {
  if (back.confirmFunc) {
    const ok = await back.confirmFunc()
    if (!ok) {
      if (back.onRejectFunc) back.onRejectFunc()
      return
    }
  }
  if (back.onAcceptFunc) back.onAcceptFunc()
  back.Clear()
  router.back()
}

const handleLogout = () => {
  console.log('Logout clicked')
  router.replace("/")
}

const handleQuit = () => {
  console.log('Quit clicked')
}
</script>

<style scoped>
#logo {
  width: 40px;
  height: 30px;
}

.sidebar-offset {
  padding-bottom: 40px;
}

.uppercase {
  text-transform: uppercase;
}

:deep(.v-list-item-title) {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
