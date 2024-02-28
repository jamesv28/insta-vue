<script setup>
import Nav from './components/Nav.vue'
</script>

<template>
  <div>
    <header>
      <Nav />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
