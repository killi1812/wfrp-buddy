<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'

const store = useCharacterStore()

const getAP = (location: string) => {
  return store.char.armour.find(a => a.location === location)?.ap || 0
}
</script>

<template>
  <v-card class="pa-4 silhouette-card" elevation="2">
    <div class="text-overline mb-2 text-primary">Armour Points</div>
    <div class="silhouette-container">
      <svg viewBox="0 0 100 200" class="silhouette-svg">
        <path d="M50 10 C 60 10, 65 20, 50 35 C 35 20, 40 10, 50 10" fill="#606060" /> <!-- Head -->
        <path d="M40 35 L 60 35 L 65 90 L 35 90 Z" fill="#606060" /> <!-- Torso -->
        <path d="M35 40 L 15 80 L 25 85 L 40 45 Z" fill="#606060" /> <!-- L Arm -->
        <path d="M65 40 L 85 80 L 75 85 L 60 45 Z" fill="#606060" /> <!-- R Arm -->
        <path d="M35 90 L 30 180 L 45 180 L 48 90 Z" fill="#606060" /> <!-- L Leg -->
        <path d="M65 90 L 70 180 L 55 180 L 52 90 Z" fill="#606060" /> <!-- R Leg -->
      </svg>

      <!-- AP Boxes -->
      <div class="ap-box head" title="Head">
        <div class="ap-label">H</div>
        <div class="ap-value">{{ getAP('Head') }}</div>
      </div>
      <div class="ap-box body" title="Body">
        <div class="ap-label">B</div>
        <div class="ap-value">{{ getAP('Body') }}</div>
      </div>
      <div class="ap-box l-arm" title="Left Arm">
        <div class="ap-label">LA</div>
        <div class="ap-value">{{ getAP('Left Arm') }}</div>
      </div>
      <div class="ap-box r-arm" title="Right Arm">
        <div class="ap-label">RA</div>
        <div class="ap-value">{{ getAP('Right Arm') }}</div>
      </div>
      <div class="ap-box l-leg" title="Left Leg">
        <div class="ap-label">LL</div>
        <div class="ap-value">{{ getAP('Left Leg') }}</div>
      </div>
      <div class="ap-box r-leg" title="Right Leg">
        <div class="ap-label">RL</div>
        <div class="ap-value">{{ getAP('Right Leg') }}</div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.silhouette-card {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0,0,0,0.1);
  height: 100%;
}

.silhouette-container {
  position: relative;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  aspect-ratio: 1/2;
}

.silhouette-svg {
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.ap-box {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--v-theme-surface);
  border: 2px solid var(--v-theme-primary);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.ap-label {
  font-size: 0.6rem;
  color: var(--v-theme-subtext);
  font-family: 'Crimson Text', serif;
  line-height: 1;
}

.ap-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--v-theme-primary);
  font-family: 'Crimson Text', serif;
  line-height: 1;
}

/* Positioning boxes based on human anatomy on a 100x200 SVG */
.head { top: 0; left: 50%; transform: translateX(-50%); }
.body { top: 50px; left: 50%; transform: translateX(-50%); }
.l-arm { top: 60px; left: 0; }
.r-arm { top: 60px; right: 0; }
.l-leg { bottom: 20px; left: 10px; }
.r-leg { bottom: 20px; right: 10px; }
</style>
