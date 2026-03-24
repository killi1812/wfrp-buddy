<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
onMounted(() => {
  router.replace('/landing')
})
</script>

<template>
  <div class="fill-height d-flex align-center justify-center">
    <v-progress-circular indeterminate color="primary" />
  </div>
</template>
