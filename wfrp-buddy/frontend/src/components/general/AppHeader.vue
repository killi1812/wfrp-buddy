<template>

  <v-app-bar color="primary" :elevation="8" height="60">
    <v-app-bar-nav-icon class="text-white" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <img id="logo" src="../../assets/logo.png" alt="logo" />
    <v-app-bar-title>POS</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" :location="undefined" temporary>
    <v-list-item @click="Window.Close()"> Exit </v-list-item>
  </v-navigation-drawer>

</template>


<script lang="ts" setup>
import { useBackStore } from "@/stores/app";
import { Window } from "@wailsio/runtime";

// References on vue components
const drawer = ref(false)

// Use Providers
const router = useRouter()
const back = useBackStore()

// Functions
const goBack = async () => {
  if (back.confirmFunc) {
    const ok = await back.confirmFunc()
    if (!ok) {
      if (back.onRejectFunc)
        back.onRejectFunc()
      return
    }
  }

  if (back.onAcceptFunc)
    back.onAcceptFunc()

  back.Clear()
  router.back()
}



</script>
<style lang="css" scoped>
#logo {
  width: 40px;
  height: 30px;
}
</style>
