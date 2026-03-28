<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center text-center">
    <v-card class="pa-8 landing-card" elevation="4">
      <div class="text-h3 mb-4 text-primary title-font">WFRP Buddy</div>
      <div class="text-h6 mb-6 subtitle-font">The Grimdark Character Manager</div>
      
      <v-divider class="my-6" />
      
      <div class="d-flex flex-column gap-4">
        <v-btn
          color="primary"
          size="x-large"
          prepend-icon="mdi-account-details"
          @click="$router.push('/character-sheet')"
          class="mb-4"
        >
          Character Sheet
        </v-btn>
        
        <v-btn
          variant="outlined"
          color="secondary"
          size="large"
          prepend-icon="mdi-plus-circle"
          disabled
        >
          Create New Character
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
.landing-card {
  background-color: var(--v-theme-surface);
  border: 2px solid var(--v-theme-primary);
  max-width: 500px;
  width: 100%;
}

.subtitle-font {
  font-family: 'Crimson Text', serif;
  font-style: italic;
  color: var(--v-theme-subtext);
}

.gap-4 {
  gap: 1rem;
}
</style>
