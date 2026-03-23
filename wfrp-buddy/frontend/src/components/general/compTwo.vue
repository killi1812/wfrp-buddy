<template>
    <div>
        <h2>Two!</h2>
        <p class="spacer">This is component two.</p>
        <v-btn @click="() => { close(); }">
            <div v-if="args">
                {{ args["message"] }}
            </div>
            <div v-else>
                Cancle
            </div>
        </v-btn>
    </div>
</template>

<script setup>
// layout properties
defineProps({
    open: {
        type: Function,
        required: true,
    },

    close: {
        type: Function,
        required: true,
    },
})


</script>

<style scoped></style>
