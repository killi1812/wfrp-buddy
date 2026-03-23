<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-card>
      <v-card-title color="primary">
        {{ title }}
      </v-card-title>
      <v-card-text class="padding-5" v-for="message in messages">
        <span class="line">
          <span class="spinner" v-if="message.isSuccess === state.loading">
          </span>
          <v-icon color="success" v-else-if="message.isSuccess === state.success">
            mdi-check-circle-outline
          </v-icon>
          <v-icon color="error" v-else>
            mdi-alert-circle-outline
          </v-icon>
          {{ message.key }}
        </span>
      </v-card-text>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>
        <v-btn :disabled="!done" color="primary" variant="elevated" @click="close"> Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { Checks } from "@/types/CheckProps";
import { ref } from "vue";
// Arguments
defineProps({
  title: String
})

// Variables
const errorIndex = ref(-1)
const stop = ref()
const dialog = ref(false)
const done = ref(false)
const messages = ref<{ key: string, isSuccess: state }[]>([])

// Constants
const timeout = 1500
enum state {
  loading,
  success,
  fail,
}

// Functions
const close = () => {
  if (stop.value)
    stop.value()

  dialog.value = false
  messages.value = []
  done.value = false
}

const delay = () => {
  return new Promise(resolve => {
    stop.value = resolve
    return setTimeout(resolve, timeout)
  }
  );
}

const execute = async (funcs: Checks[]) => {
  for (const f of funcs) {
    const m = { key: f.messageKey, isSuccess: state.loading }
    const i = messages.value.push(m) - 1;
    const rez = await f.func()
    errorIndex.value = rez ? -1 : i
    messages.value[i].isSuccess = rez ? state.success : state.fail
    if (!rez) return
  }
}

const executeAsync = async (funcs: Checks[]) => {
  const promises = funcs.map(async f => {
    const m = { key: f.messageKey, isSuccess: state.loading }
    const i = messages.value.push(m) - 1;
    const promise = await f.func()
    if (errorIndex.value || errorIndex.value === undefined)
      errorIndex.value = promise ? -1 : i
    messages.value[i].isSuccess = promise ? state.success : state.fail
    return
  })
  await Promise.all(promises!)
}

// Expose Functions
// Run runs function checks and return a index of a function that fails first,
// if no function fails it will return -1
const Run = async (funcs: Checks[], async: boolean = false): Promise<number> => {
  dialog.value = true
  errorIndex.value = -1
  try {
    if (async) {
      await executeAsync(funcs);
    } else {
      await execute(funcs)
    }
  }
  finally {
    done.value = true
  }

  if (errorIndex.value == -1) {
    await delay()
    close()
  }
  return errorIndex.value
};

defineExpose({
  Run,
})
</script>

<style lang="css" scoped>
.v-card-title {
  color: white;
  background-color: rgb(var(--v-theme-primary));
}

.padding-5 {
  padding: 5px !important;
  margin-left: 10px;
}

.line {
  display: flex;
  justify-content: start;
  gap: 1rem;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #ccc;
  border-top-color: rgb(var(--v-theme-primary));
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
