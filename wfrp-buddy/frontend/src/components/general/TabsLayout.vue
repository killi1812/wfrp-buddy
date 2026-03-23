<template>
  <div class="container">
    <!--This div is here to give padding for underscore of a selected tab-->
    <div>
      <v-card color="background">
        <v-tabs v-model="activeTab" bg-color="background" density="default" class="over" show-arrows color="primary"
          slider-color="primary">
          <v-tab v-for="item in tabs" :key="item.key" :value="item.key">
            {{ item.titleKey }}
          </v-tab>
        </v-tabs>
      </v-card>
    </div>

    <v-tabs-window v-model="activeTab" class=" container spacer">
      <v-tabs-window-item v-for="item in tabs" :key="item.key" :value="item.key" class="container spacer">
        <div v-if="item.showClose" class="close-button">
          <v-btn @click="Close(item.key)" variant="plain" size="large" density="default" style="margin-bottom: 1rem;">
            <v-icon size="x-large">
              mdi-close-circle
            </v-icon>
          </v-btn>
        </div>

        <KeepAlive :max="5" class="container spacer">
          <component v-bind:is="item.content" class="content" :open="Open" :close="Close" :args="item.args" />
        </KeepAlive>

      </v-tabs-window-item>
    </v-tabs-window>

  </div>
</template>
<script setup lang="ts">
import { TabItem } from '@/types/TabItem'


const props = defineProps({
  items: {
    type: Array<TabItem>,
    required: false,
  },
  //TODO: rename to main tab
  startTab: {
    type: TabItem,
    required: true,
  }
})

// Variables
const activeTab = ref(props.startTab.key)
const tabs = shallowRef([props.startTab, ...(props.items ? props.items : [])])
const eagerHistory = ref<string[]>([props.startTab.key])

// Use providers
const router = useRouter()

// Hooks
watch([activeTab], () => {
  eagerHistory.value.push(activeTab.value)
})

// Functions
const getLast = () => {
  return eagerHistory.value.at(eagerHistory.value.length - 1) ?? tabs.value[0].key
}

// Remove tab
const Close = (key: string) => {
  if (tabs.value.length == 1) {
    router.back()
    return
  }

  if (!key)
    key = activeTab.value

  tabs.value = tabs.value.filter(t => t.key != key)
  eagerHistory.value = eagerHistory.value.filter(t => t != key)

  activeTab.value = getLast() ?? ""
}

const Open = async (item: TabItem, focus: boolean = true) => {
  // Block opening open tab just focus
  if (tabs.value.some(t => t.key == item.key)) {
    activeTab.value = item.key
    return
  }

  tabs.value.push(item)
  nextTick(() => {
    if (focus) {
      activeTab.value = item.key
    }
  })

}

defineExpose({
  Close,
  Open
})
</script>

<style lang="css" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.close-button {
  position: absolute;
  right: 0;
}

.content {
  padding: 1rem;
}
</style>
