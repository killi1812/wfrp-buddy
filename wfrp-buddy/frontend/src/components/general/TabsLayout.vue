<template>
  <div class="container">
    <!--This div is here to give padding for underscore of a selected tab-->
    <div>
      <v-card color="background">
        <v-tabs v-model="activeTab" bg-color="background" class="over" color="primary" density="default" show-arrows
          slider-color="primary">
          <v-tab v-for="item in tabs" :key="item.key" :value="item.key">
            <span>
              {{ item.titleKey }}
            </span>
            <v-btn v-if="item.showCloseTab" icon="mdi-close" color="subtext" variant="plain"
              @click.stop="Close(item.key)" />
          </v-tab>
        </v-tabs>
      </v-card>
    </div>

    <v-tabs-window v-model="activeTab" class="scroll">
      <v-tabs-window-item v-for="item in tabs" :key="item.key" class="" :value="item.key">
        <div v-if="item.showClose" class="close-button">
          <v-btn density="default" size="large" style="margin-bottom: 1rem;" variant="plain" @click="Close(item.key)">
            <v-icon size="x-large">
              mdi-close-circle
            </v-icon>
          </v-btn>
        </div>

        <KeepAlive :max="5">
          <component :is="item.content" v-bind="item.args" class="content pa-4" :close="Close" :open="Open" />
        </KeepAlive>

      </v-tabs-window-item>
    </v-tabs-window>

  </div>
</template>

<script lang="ts">
// Type Definitions


/**
 * Represents the configuration for a single tab item used within a tab container.
 * Required fields are [key], [titleKey] and [content]
 */
export interface Tab {
  /**
   * The unique identifier for the tab.
   * @type {string}
   */
  key: string

  /**
   * The translation key for the tab's title text.
   * @type {string}
   */
  titleKey: string

  /**
   * (Optional) An object of arguments for the title's translation key.
   * @type {object | undefined}
   */
  titleArgs?: {}

  /**
  * The Vue component or content to be rendered inside the tab's body.
  * @type {any}
  */
  content: any

  /**
  * (Optional) Arguments or props to pass to the tab's content component.
  * @type {any | undefined}
  * @default undefined
  */
  args?: any

  /**
  * (Optional) Determines if the close button on the tab should be visible.
  * @type {boolean | undefined}
  * @default false
  */
  showClose?: boolean

  /**
  * (Optional) An additional flag to control the visibility of the close button on the tab.
  * @type {boolean | undefined}
  * @default false
  */
  showCloseTab?: boolean
}

/**
 *
 * Defines the signature for a function that  opens a new tab.
 *
 * @param {Tab} item The tab object to be opened.
 * @param {boolean} [focus] - (Optional) If true, the new tab will be focused immediately.
 * @returns {Promise<void>} A promise that resolves once the tab is opened.
 */
export type openFunc = (item: Tab, focus?: boolean) => Promise<void>

/**
 * Defines the signature for a function that closes a tab.
 *
 * @param {string} [key] - (Optional) The unique key of the tab to close.
 * If not provided, closes the currently active tab.
 * @returns {void}
 */
export type closeFunc = (key?: string) => void

export interface TabComp {
  open: openFunc
  close: closeFunc
  args: {},
}

export interface TabsLayoutProps {
  /**
      * An array of Tab objects, where each object represents a single tab.
      * @type {Tab[]}
      */
  items?: Array<Tab>,
  /**
   * The Tab object that should be selected by default on initial render.
   * @type {Tab}
   * @required
   */
  startTab: Tab,
}
</script>

<script setup lang="ts">
import { Window } from '@wailsio/runtime'


const props = defineProps<TabsLayoutProps>()

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
  return eagerHistory.value[(eagerHistory.value.length - 1)] ?? tabs.value[0].key
}


const windowHeight = ref(0)
const containerHeight = computed(() => (windowHeight.value - 16 - 16 - 48 - 60 - 7).toString() + 'px')

const handleResize = async () => {
  const rez = await Window.Size()
  windowHeight.value = rez.height
}

// Hooks
onMounted(async () => {
  handleResize()
  window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});



// Remove tab
const Close: closeFunc = (key?: string) => {
  if (tabs.value.length == 1) {
    router.back()
    return
  }

  if (!key)
    key = activeTab.value

  tabs.value = tabs.value.filter(t => t.key != key)
  eagerHistory.value = eagerHistory.value.filter(t => t != key)

  activeTab.value = getLast() ?? ''
}

const Open: openFunc = async (item: Tab, focus: boolean = true) => {
  // Block opening open tab just focus
  if (tabs.value.some(t => t.key == item.key)) {
    activeTab.value = item.key
    return
  }

  tabs.value.push(item)
  await nextTick(() => {
    if (focus) {
      activeTab.value = item.key
    }
  })

}

defineExpose({
  Close,
  Open,
})
</script>

<style lang="css" scoped>
.close-button {
  position: absolute;
  right: 0;
}

.content {
  flex-grow: 1;
  margin-bottom: 40px;
  min-height: v-bind(containerHeight);
  display: flex;
  flex-direction: column;
}

.container {
  height: 100%;
  padding-bottom: 40px;
}

.scroll {
  height: 100%;
  overflow-y: auto;
}
</style>
