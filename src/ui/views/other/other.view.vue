<template>

  <div>
    Other {{ AppModule.state }}
    <br>
  </div>

  <button class="btn" @click="$router.push('/')">
    Home page
  </button>

</template>

<script setup lang="ts">

  import { AppModule } from '@domain/store/app'

  AppModule.set_state( {
    test: 34343434,
    biil: true
  } )

</script>

<style scoped lang="scss">

</style>
