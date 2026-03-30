<template>
  <v-app-bar color="primary" :elevation="8" height="60" app>

    <v-btn icon @click="goBack" class="text-white">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <img id="logo" src="../../assets/logo.png" alt="logo" class="ml-2" />
    <v-app-bar-title class="ml-2 text-white font-weight-bold uppercase">WFRP BUDDY</v-app-bar-title>

    <v-spacer />


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

  <v-navigation-drawer v-model="drawer" :rail="!open" rail-width="60" location="left" permanent persistent elevation="2"
    color="surface" class="sidebar-offset">
    <v-list nav density="compact">
      <!-- Information section -->
      <v-list-item v-show="open" readonly class="text-caption text-uppercase text-grey">Information</v-list-item>
      <v-divider v-show="open"></v-divider>

      <SidebarItem to="/" icon="mdi-home" title="Home" color="primary" :open="open" />
      <SidebarItem to="/characters" icon="mdi-account-group" title="Characters" color="primary" :open="open" />

      <!-- Help section -->
      <v-list-item v-show="open" readonly class="text-caption text-uppercase text-grey mt-4">Help</v-list-item>
      <v-divider v-show="open"></v-divider>

      <SidebarItem to="/info" icon="mdi-help-circle" title="info" color="primary" :open="open" />
      <SidebarItem to="/about" icon="mdi-information" title="About" color="primary" :open="open" />

      <!-- Exit -->
      <v-divider class="my-2"></v-divider>
      <SidebarItem :click="Window.Close" icon="mdi-power" title="Exit" color="error" :open="open" />
      <v-spacer />
      <SidebarItem :click="() => open = !open" :icon="open ? 'mdi-arrow-left' : 'mdi-arrow-right'"
        :title="open ? 'Shrink' : 'Expand'" :tooltip-text="open ? 'Shrink' : 'Expand'" :open="open" />
    </v-list>

  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBackStore } from "@/stores/app"
import { Window } from '@wailsio/runtime'
import SidebarItem from './SidebarItem.vue'

const open = ref(false)
const drawer = ref(true)
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
