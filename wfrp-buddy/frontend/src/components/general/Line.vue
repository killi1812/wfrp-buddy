<template>
    <hr class="pointer-line">
</template>
<style lang="css" scoped>
.pointer-line {
    border: none;
    height: 3px;
    background: rgb(var(--v-theme-accent));
    position: relative;
}

.pointer-line::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 5rem;
    height: 100%;
    background: rgb(var(--v-theme-primary));
}
</style>