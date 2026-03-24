<template>
  <v-app-bar color="primary" :elevation="8" height="60" app>
    <v-app-bar-nav-icon class="text-white" @click="drawer = !drawer" />
    <img id="logo" src="../../assets/logo.png" alt="logo" class="ml-2" />
    <v-app-bar-title class="ml-2 text-white font-weight-bold">WFRP BUDDY</v-app-bar-title>
    
    <v-spacer />
    
    <v-btn icon @click="goBack" class="text-white">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn icon class="text-white">
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary color="surface">
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        @click="navigateTo('/')"
      />
      <v-list-item
        prepend-icon="mdi-account-details"
        title="Character Sheet"
        @click="navigateTo('/character-sheet')"
      />
      <v-divider class="my-2" />
      <v-list-item
        prepend-icon="mdi-exit-to-app"
        title="Exit"
        @click="Window.Close()"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBackStore } from "@/stores/app"
import { Window } from "@wailsio/runtime"

const drawer = ref(false)
const router = useRouter()
const back = useBackStore()

const navigateTo = (path: string) => {
  router.push(path)
  drawer.value = false
}

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
</script>

<style scoped>
#logo {
  width: 40px;
  height: 30px;
}
:deep(.v-list-item-title) {
  font-family: 'Crimson Text', serif;
  font-weight: bold;
  font-size: 1.1rem !important;
}
</style>
