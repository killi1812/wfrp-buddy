<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center">
    <v-card class="pa-8 grim-card" elevation="4" max-width="500" width="100%">
      <div class="text-h4 mb-4 text-primary section-title text-center">User Profile</div>
      <v-divider class="mb-6" />
      
      <div class="d-flex align-center mb-6">
        <v-avatar size="80" color="primary" class="mr-4">
          <v-icon size="48" icon="mdi-account" />
        </v-avatar>
        <div>
          <div class="text-h5 font-weight-bold">Gottfried</div>
          <div class="text-subtitle-1 text-grey">Slayer Enthusiast</div>
        </div>
      </div>

      <v-list density="compact" bg-color="transparent">
        <v-list-item prepend-icon="mdi-email-outline" title="Email" subtitle="gottfried@slayer.com" />
        <v-list-item prepend-icon="mdi-shield-account-outline" title="Account Status" subtitle="Premium Member" />
      </v-list>

      <v-btn block color="primary" class="mt-6" prepend-icon="mdi-pencil">
        Edit Profile
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
// Placeholder for profile logic
</script>

<style scoped>
.section-title {
  font-family: 'Crimson Text', serif;
}
</style>
