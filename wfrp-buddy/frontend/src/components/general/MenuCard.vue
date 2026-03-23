<template>
    <v-card color="primary" :title="title" :subtitle="subtitle" :prepend-icon="icon"
        variant="elevated" :width="options.width">
        <div class="content">
            <slot v-bind="{ elevation: 24 }"></slot>
        </div>
    </v-card>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    subtitle: String,
    icon: String,

})
const options = {
    width: 250,
};

</script>

<style scoped lang="css">
.content {
    display: flex;
    flex-direction: column;
    background-color: rgb(var(--v-theme-background));
}

:slotted(.v-btn) {
    border-radius: 0;
    display: flex;
    justify-content: end;
    height: 50px;
    font-size: larger;
    font-weight: 500;
    letter-spacing: normal;
    width: 100%;
    padding-bottom: 1px;
    border-bottom: 2px solid rgb(var(--v-theme-surface));
}

:slotted(.v-btn:last-child) {
    border-bottom: 0px;
}
</style>
