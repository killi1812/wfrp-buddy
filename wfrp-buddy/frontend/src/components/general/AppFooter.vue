<template>
  <v-footer color="surface" app height="40">
    <div class="text-caption" style="position: absolute; left: 16px">
      <span v-if="appVersion">{{ appVersion }} &ThinSpace;</span>
      <span v-if="appStore.getCashRegisterNumber()">
        | &ThinSpace; {{ appStore.getCashRegisterNumber() }} &ThinSpace;
      </span>
      <span v-if="false">
        | &ThinSpace; user &ThinSpace;
      </span>
    </div>
    <div class="text-caption" style="position: absolute; right: 16px">
      {{ currentTime }}
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";


// Variables
let intervalId: number | null = null;
let timeFormatCode: string;
const currentTime = ref<string>();
const appVersion = ref<string>();

// Store providers
const appStore = useAppStore();

const updateTime = () => {
  currentTime.value = new Date().toLocaleString(timeFormatCode);
};

const getTimeRegion = async () => {
  // const rez = await GetTimeRegion();
  const rez = "en"
  timeFormatCode = rez;
  currentTime.value = new Date().toLocaleString(timeFormatCode);
};

onMounted(() => {
  intervalId = setInterval(updateTime, 1000); // Update every second
  getTimeRegion();
});

onUnmounted(() => {
  clearInterval(intervalId!);
});
</script>

<style scoped lang="css"></style>
