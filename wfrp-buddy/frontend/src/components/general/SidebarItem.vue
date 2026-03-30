<template>
  <v-tooltip :disabled="open" :text="tooltipText || title" location="right">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-list-item v-if="to" v-bind="tooltipProps" :to="to" :prepend-icon="computedIcon" :title="title"
        :color="color" />
      <v-list-item v-else @click="click?.()" v-bind="tooltipProps" :prepend-icon="icon" :title="title" :color="color" />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  /** Navigation target */
  to?: string
  /** on click event */
  click?: Function
  /** Base icon name (e.g., 'mdi-home') */
  icon: string
  /** Display title */
  title: string
  /** Whether the sidebar is open/expanded */
  open: boolean
  /** Item color */
  color?: string
  /** Optional tooltip text override */
  tooltipText?: string
}>()

const route = useRoute()

const computedIcon = computed(() => {
  if (!props.to) return props.icon
  const isActive = route.path === props.to
  return isActive ? props.icon : `${props.icon}-outline`
})
</script>
