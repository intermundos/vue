<template>

    <div>
        Summary {{ state.initialized }}

        <br>


    </div>

</template>

<script setup lang="ts">

    import { AppModule } from '@modules/app/app.module'

    const state = AppModule.state

    AppModule.actions.initialize()

</script>

<style scoped lang="scss">

</style>
