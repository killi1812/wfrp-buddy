<template>
  <div class="tabs-layout-container">
    <div class="tabs-header">
      <v-card color="background" elevation="0">
        <v-tabs v-model="activeTab" bg-color="background" density="default" show-arrows color="primary">
          <v-tab v-for="item in tabs" :key="item.key" :value="item.key">
            {{ item.titleKey }}
          </v-tab>
        </v-tabs>
      </v-card>
    </div>

    <v-tabs-window v-model="activeTab" class="tabs-window">
      <v-tabs-window-item v-for="item in tabs" :key="item.key" :value="item.key" class="tabs-window-item">
        <div v-if="item.showClose" class="close-button">
          <v-btn @click="Close(item.key)" variant="plain" size="large" icon="mdi-close-circle" />
        </div>

        <KeepAlive :max="5">
          <component v-bind:is="item.content" class="tab-content-component" :open="Open" :close="Close" :args="item.args" />
        </KeepAlive>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup lang="ts">
import { TabItem } from '@/types/TabItem'
import { ref, shallowRef, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  items: {
    type: Array<TabItem>,
    required: false,
  },
  startTab: {
    type: TabItem,
    required: true,
  }
})

const activeTab = ref(props.startTab.key)
const tabs = shallowRef([props.startTab, ...(props.items ? props.items : [])])
const eagerHistory = ref<string[]>([props.startTab.key])
const router = useRouter()

watch([activeTab], () => {
  eagerHistory.value.push(activeTab.value)
})

const getLast = () => {
  return eagerHistory.value.at(eagerHistory.value.length - 1) ?? tabs.value[0].key
}

const Close = (key: string) => {
  if (tabs.value.length == 1) {
    router.back()
    return
  }
  if (!key) key = activeTab.value
  tabs.value = tabs.value.filter(t => t.key != key)
  eagerHistory.value = eagerHistory.value.filter(t => t != key)
  activeTab.value = getLast() ?? ""
}

const Open = async (item: TabItem, focus: boolean = true) => {
  if (tabs.value.some(t => t.key == item.key)) {
    activeTab.value = item.key
    return
  }
  tabs.value.push(item)
  nextTick(() => {
    if (focus) activeTab.value = item.key
  })
}

defineExpose({ Close, Open })
</script>

<style scoped>
.tabs-layout-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.tabs-header {
  flex: 0 0 auto;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.tabs-window {
  flex: 1 1 auto;
  height: 100%;
}

.tabs-window-item {
  height: 100%;
}

.tab-content-component {
  height: 100%;
}

.close-button {
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 100;
}
</style>
