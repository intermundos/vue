<style scoped lang="scss">

</style>

<template>

    <div class="layout app-layout flex flex-col h-full">

        <app-header/>

        <router-view v-slot="{ Component, route }">
            <main class="flex-grow">
                <component :is="Component" :class="[route.meta.classes]"/>
            </main>
        </router-view>

        <footer>
            2023 @ Anton
        </footer>

    </div>

</template>

<script setup></script>

<script>

    export default {
        name: 'app.layout'
    }

</script>
