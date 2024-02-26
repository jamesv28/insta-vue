<script setup>
import {ref} from 'vue'

const searchUsers = ref('')

const onSearch = () => {
    console.log('search')
}
</script>


<template>
    <a-layout class="layout">
    <a-layout-header>
        <div class="nav-container">
            <div class="left-container">
                <router-link to="/">Instagram</router-link>
                <a-input
                    v-model="searchUsers"
                    placeholder="input search text"
                    style="width: 100px"
                    @search="onSearch"
                />
            </div>
            <div class="right-container">
                <a-button type="primary">Sign Up</a-button>
                <a-button type="primary">Sign In</a-button>
            </div>
        </div>
    </a-layout-header>
  </a-layout>
</template>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
}

.left-container {
    display: flex;
    align-items: center;
}

.left-container a {
    margin-right: 10px;
}
.right-container button{
    margin-left: 10px;
}
</style>