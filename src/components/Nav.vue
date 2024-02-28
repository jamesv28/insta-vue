<script setup>
import AuthModal from './AuthModal.vue'
import {ref} from 'vue'

const searchUsers = ref('')

const onSearch = () => {
    console.log('search')
}

const isAuthenticated = ref(false)
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
            <div class="right-container" v-if="!isAuthenticated">
                <auth-modal :isLogin="false"/>
                <auth-modal :isLogIn="true" />
            </div>
            <div class="right-container" v-else>
                <a-button type="primary">Profile</a-button>
                <a-button type="default">Logout</a-button>
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

.right-container {
    display: flex;
    align-items: center;
}
.right-container button{
    margin-left: 10px;
}
</style>