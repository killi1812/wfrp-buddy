<template>
    <div class="ctn">
        <div class="spacer results">
            <ProductCard v-for="result in list" :product="result" @click="selected(result)" style="padding: unset;" />
        </div>

        <div class="search-row">
            <div class="numpad">
                <Numpad ref="numpad" v-model:input="query" v-on:submit="handleSearch" func-icon="mdi-alpha-c"
                    :func="() => { numpad.Clear() }" />
            </div>

            <!-- Modular line -->
            <div>
                <slot name="options">
                </slot>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import Numpad from './Numpad.vue';

// Arguments
const props = defineProps({
    selected: {
        type: Function,
        required: true,
    },
    search: {
        //TODO make function take number and return array
        type: Function,
        required: true,
    },
    disabled: Boolean,
})

// Variables
const query = ref(0)
const list = ref<any[]>([])

// References
const numpad = ref(Numpad)

// Functions
const handleSearch = async () => {
    const rez = await props.search(query.value)
    list.value = rez
}

// Public expose
const Clear = () => {
    list.value = []
    numpad.value.Clear()
}

defineExpose({
    Clear
})

</script>

<style lang="css" scoped>
.results {
    display: flex;
    justify-content: start;
    margin-bottom: 1rem;
    gap: 1rem;
}

.ctn {
    padding: 2rem;
    padding-top: 0.5rem;
    display: flex;
    height: 100%;
    flex-direction: column
}

.search-row {
    display: flex;
    gap: 1rem;
    justify-content: start;
    flex-direction: row;
    flex-wrap: wrap;
    height: initial;
}
</style>
