<template>
  <v-dialog v-model="internalOpen" max-width="500px">
    <v-card class="grim-card pa-4">
      <v-card-title class="text-h5 text-primary text-center uppercase font-weight-bold">
        New Character
      </v-card-title>

      <v-card-text>
        <p class="text-body-1 text-center mb-6">Create a new character manually or import from a file.</p>

        <FileDropZone
          id="character-import-zone"
          class="mb-6"
          title="Create a character from a file"
          subtitle="Drag & Drop .json file here or click to browse"
          accept=".json"
          @dropped="onFilesDropped"
        />

        <v-btn block color="primary" size="large" prepend-icon="mdi-plus" @click="createNew">
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
import { computed } from 'vue'
import { ImportCharacter } from '../../../bindings/changeme/service/charactersrv'
import { useSnackbar } from '../general/SnackbarProvider.vue'
import FileDropZone from '../general/FileDropZone.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'created'])

const internalOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const snackbar = useSnackbar()

const onFilesDropped = async (contents: string[]) => {
  try {
    snackbar.Info(`Importing ${contents.length} character(s)...`)
    for (const content of contents) {
      await ImportCharacter(content)
    }
    snackbar.Success('Character(s) imported successfully')
    internalOpen.value = false
    emit('created')
  } catch (err) {
    console.error('Import failed:', err)
    snackbar.Error('Failed to import character')
  }
}

const createNew = () => {
  snackbar.Info('Manual character creation coming soon')
  internalOpen.value = false
}
</script>

<style scoped>
.uppercase {
  text-transform: uppercase;
}
</style>
