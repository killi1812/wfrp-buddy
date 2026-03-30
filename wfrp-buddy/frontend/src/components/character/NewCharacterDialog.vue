<template>
  <v-dialog v-model="internalOpen" max-width="500px">
    <v-card class="grim-card pa-4">
      <v-card-title class="text-h5 text-primary text-center uppercase font-weight-bold">
        New Character
      </v-card-title>
      
      <v-card-text>
        <p class="text-body-1 text-center mb-6">Create a new character manually or import from a file.</p>
        
        <!-- Drag and Drop Zone -->
        <div 
          class="drop-zone mb-6"
          :class="{ 'drag-over': isDragging }"
          @dragover.prevent="onDragOver"
          @dragenter.prevent="onDragEnter"
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
          @click="triggerFileInput"
        >
          <v-icon size="48" color="primary" class="mb-2">mdi-file-import-outline</v-icon>
          <div class="text-h6">Create a character from a file</div>
          <div class="text-caption text-grey">Drag & Drop .json file here or click to browse</div>
          <input 
            type="file" 
            ref="fileInput" 
            accept=".json" 
            style="display: none" 
            @change="onFileSelected"
          />
        </div>

        <v-btn
          block
          color="primary"
          size="large"
          prepend-icon="mdi-plus"
          @click="createNew"
        >
          New Character
        </v-btn>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="internalOpen = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ImportCharacter } from '../../../bindings/changeme/service/charactersrv'
import { useSnackbar } from '../general/SnackbarProvider.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'created'])

const internalOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const snackbar = useSnackbar()
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const onDragOver = (e: DragEvent) => {
  // We want to allow file drops, so we don't return early if it includes Files
  e.preventDefault()
}

const onDragEnter = (e: DragEvent) => {
  isDragging.value = true
}

const onDragLeave = (e: DragEvent) => {
  // Use contains to avoid flickering on child elements
  const target = e.currentTarget as HTMLElement
  if (!target.contains(e.relatedTarget as Node)) {
    isDragging.value = false
  }
}

const onDrop = async (e: DragEvent) => {
  isDragging.value = false
  const files = e.dataTransfer?.files
  if (files && files.length > 0) {
    await processFile(files[0])
  }
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const onFileSelected = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    await processFile(target.files[0])
  }
}

const processFile = async (file: File) => {
  if (!file.name.endsWith('.json')) {
    snackbar.Error('Please select a .json file')
    return
  }

  try {
    const text = await file.text()
    // Send to backend
    await ImportCharacter(text)
    snackbar.Success('Character imported successfully')
    internalOpen.value = false
    emit('created')
  } catch (err) {
    console.error('Import failed:', err)
    snackbar.Error('Failed to import character')
  }
}

const createNew = () => {
  // Placeholder for manual creation
  snackbar.Info('Manual character creation coming soon')
  internalOpen.value = false
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

.drop-zone.drag-over {
  border-color: rgb(var(--v-theme-primary));
  background-color: rgba(var(--v-theme-primary), 0.1);
  transform: scale(1.02);
}

.uppercase {
  text-transform: uppercase;
}
</style>
