<script setup lang="ts">
const props = defineProps<{
  ambitions: any,
  party: any
}>()
</script>

<template>
  <v-card class="pa-4 header-sub-card h-100 elevation-2">
    <div class="text-h6 mb-2 text-primary section-title">Ambitions</div>
    <v-row dense>
      <v-col cols="12">
        <v-text-field v-model="props.ambitions.ShortTerm" label="Short-Term Ambition" variant="outlined" density="compact" hide-details class="mb-3" />
      </v-col>
      <v-col cols="12">
        <v-textarea v-model="props.ambitions.LongTerm" label="Long-Term Ambition" variant="outlined" density="compact" hide-details rows="2" class="mb-3" />
      </v-col>
    </v-row>

    <v-divider class="my-2" />

    <div class="text-h6 mb-2 text-primary section-title">Party</div>
    <v-row dense v-if="props.party">
      <v-col cols="12">
        <v-text-field v-model="props.party.Name" label="Party Name" variant="outlined" density="compact" hide-details class="mb-3" />
      </v-col>
    </v-row>
    <div v-else class="text-caption text-grey pa-2 italic-font">No party assigned</div>
  </v-card>
</template>

<style scoped>
.header-sub-card {
  border: 1px solid rgba(0,0,0,0.1);
  background-color: var(--v-theme-surface);
}

:deep(label), :deep(input), :deep(textarea) {
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}

.italic-font {
  font-style: italic;
  font-family: 'Crimson Text', serif;
}
</style>
