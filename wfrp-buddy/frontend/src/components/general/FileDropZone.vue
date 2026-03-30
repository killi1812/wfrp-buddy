<template>
  <div :id="id" class="drop-zone" data-file-drop-target :class="{ 'drag-over': isDragging }" @dragover="onDragOver"
    @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="onDrop" @click="triggerFileInput">
    <v-icon size="48" color="primary" class="mb-2">{{ icon || 'mdi-file-import-outline' }}</v-icon>
    <div class="text-h6">{{ title }}</div>
    <div v-if="subtitle" class="text-caption text-grey">{{ subtitle }}</div>

    <input type="file" ref="fileInput" :accept="accept" :multiple="multiple" style="display: none"
      @change="onFileSelected" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Events } from '@wailsio/runtime'
import { ReadFile } from 'bindings/changeme/service/appserv'

const props = defineProps<{
  /** Unique ID for Wails drop targeting */
  id: string
  /** Title to display */
  title: string
  /** Subtitle/hint to display */
  subtitle?: string
  /** Icon to display */
  icon?: string
  /** Accepted file extensions (e.g., '.json') */
  accept?: string
  /** Allow multiple files */
  multiple?: boolean
}>()

const emit = defineEmits<{
  /** Emitted when files are dropped or selected, returns an array of file contents */
  (e: 'dropped', contents: string[]): void
}>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

// Handle Wails File Drop
let unsubscribe: () => void

onMounted(() => {
  unsubscribe = Events.On('wails:file-drop', async (data: any) => {
    // Debug logging
    console.log(`[FileDropZone] Received event for ID: ${props.id}`, data)

    // Check if event has a 'data' property (standard in some Wails event versions)
    const payload = data.data || data

    if (payload.targetId === props.id && payload.paths) {
      console.log(`[FileDropZone] Target match! Processing ${payload.paths.length} files.`)
      const contents: string[] = []
      for (const path of payload.paths) {
        if (props.accept && !path.toLowerCase().endsWith(props.accept.toLowerCase())) {
          console.log(`[FileDropZone] Skipping file (extension mismatch): ${path}`)
          continue
        }

        try {
          const content = await ReadFile(path)
          contents.push(content)
        } catch (err) {
          console.error(`[FileDropZone] Failed to read file at ${path}:`, err)
        }
      }

      if (contents.length > 0) {
        emit('dropped', contents)
      }
    } else {
      console.log(`[FileDropZone] No match or no paths. TargetID: ${payload.targetId}`)
    }
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

const onDragOver = (e: DragEvent) => {
  if (e.dataTransfer?.types.includes('Files')) {
    return
  }

  e.preventDefault()
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'copy'
  }
  isDragging.value = true
}

const onDragEnter = (e: DragEvent) => {
  if (e.dataTransfer?.types.includes('Files')) return

  e.preventDefault()
  isDragging.value = true
}

const onDragLeave = (e: DragEvent) => {
  if (e.dataTransfer?.types.includes('Files')) return

  e.preventDefault()
  const target = e.currentTarget as HTMLElement
  if (!target.contains(e.relatedTarget as Node)) {
    isDragging.value = false
  }
}

const onDrop = async (e: DragEvent) => {
  if (e.dataTransfer?.types.includes('Files')) {
    return
  }

  e.preventDefault()
  isDragging.value = false

  const files = e.dataTransfer?.files
  if (files && files.length > 0) {
    await processFiles(Array.from(files))
  }
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const onFileSelected = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    await processFiles(Array.from(target.files))
  }
}

const processFiles = async (files: File[]) => {
  const contents: string[] = []
  for (const file of files) {
    if (props.accept && !file.name.toLowerCase().endsWith(props.accept.toLowerCase())) {
      continue
    }

    try {
      const text = await file.text()
      if (text) contents.push(text)
    } catch (err) {
      console.error(`Failed to read browser file ${file.name}:`, err)
    }
  }

  if (contents.length > 0) {
    emit('dropped', contents)
  }
}
</script>

<style scoped>
.drop-zone {
  border: 2px dashed rgba(var(--v-theme-primary), 0.4);
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: rgba(var(--v-theme-primary), 0.02);
}

.drop-zone:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
  border-color: rgba(var(--v-theme-primary), 0.8);
}

.drop-zone.drag-over,
.drop-zone.file-drop-target-active {
  border-color: rgb(var(--v-theme-primary));
  background-color: rgba(var(--v-theme-primary), 0.1);
  transform: scale(1.02);
}
</style>
