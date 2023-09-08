<template>

  <div>
    Home {{ AppModule.state.test }}
    <br>
  </div>

  <button class="btn" @click="$router.push('/other')">
    Other page
  </button>

</template>

<script setup lang="ts">

  import { AppModule } from '@domain/store/app'

  AppModule.test()


</script>

<style scoped lang="scss">

</style>
