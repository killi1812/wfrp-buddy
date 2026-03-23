<script lang="ts" setup>
import { reactive } from "vue";
import CompTwo from "./compTwo.vue";


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

const data = reactive({
    i: 0,
});
</script>

<template>
    <div class="container">
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field id="test" model-value="Testing value" label="AMOUNT" variant="underlined" readonly
                        dirty />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="plain" readonly dirty />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="plain" readonly />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field model-value="Testing value" label="AMOUNT" variant="filled" readonly dirty />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="filled" readonly dirty />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="filled" readonly />
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-text-field model-value="Testing value" label="AMOUNT" variant="solo-filled" readonly />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="solo-filled" readonly dirty />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="solo-filled" readonly />
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-text-field model-value="Testing value" label="AMOUNT" variant="solo-filled" readonly flat />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="solo-filled" readonly dirty flat />
                </v-col>
                <v-col>
                    <v-text-field model-value="" label="AMOUNT" variant="solo-filled" readonly flat />
                </v-col>
            </v-row>
        </v-container>

        <!--
            <ProductCard :product="{
                name: 'Test',
                description: 'works',
                price: 12.24
            }" />
        -->

        <div>
            <v-btn v-if="open"
                @click="() => { open({ key: data.i.toString(), titleKey: `test`, content: CompTwo, showClose: true, args: { message: 'bok' } }); data.i++; }">
                Open new
            </v-btn>
            <v-btn @click="() => { close(); data.i++; }">
                cancle
            </v-btn>
        </div>

    </div>
</template>

<style lang="css" scoped>
.btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;
}

.btn:hover {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: #333333;
}

.container {
    display: flex;
    gap: 2px;
    flex-direction: column;
}
</style>
