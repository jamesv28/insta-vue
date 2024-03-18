<script setup>
import { onMounted } from 'vue';
import {useUserStore} from './stores/users'
import Nav from './components/Nav.vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.getUser()
})
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
