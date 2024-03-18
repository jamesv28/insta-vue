<script setup>
import AuthModal from './AuthModal.vue'
import {ref} from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import {useUserStore} from "../stores/users"

const userStore = useUserStore()
const {user, userLoading} = storeToRefs(userStore)
const router = useRouter()
const searchUsers = ref('')

const onSearch = () => {
    if(searchUsers.value.length) {
        router.push(`/profile/${searchUsers.value}`)
        searchUsers.value = ''
    }
   
}

const logout = async () => {
    await userStore.handleSignout()
}
</script>


<template>
    <a-layout class="layout">
    <a-layout-header>
        <div class="nav-container">
            <div class="left-container">
                <router-link to="/">Instagram</router-link>
                <a-input-search
                    v-model:value="searchUsers"
                    placeholder="input search text"
                    style="width: 100px"
                    @search="onSearch"
                />
            </div>
            <div class="content" v-if="!userLoading">
                <div class="right-container" v-if="!user">
                    <auth-modal :isLogIn="false"/>
                    <auth-modal :isLogIn="true" />
                </div>
                <div class="right-container" v-else>
                    <a-button type="primary">Profile</a-button>
                    <a-button type="primary" @click="logout">Logout</a-button>
                </div>
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

.content {
    display: flex;
    align-items: center;
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