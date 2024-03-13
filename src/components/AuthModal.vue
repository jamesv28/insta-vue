<script setup>
import {reactive, ref} from 'vue'
import { storeToRefs } from 'pinia'
import {useUserStore} from '../stores/users'

const open = ref(false);
const userStore = useUserStore()
const {errorMessage} = storeToRefs(userStore)
const showModal = () => {
  open.value = true;
};

const userCredentials = reactive({
  email: '',
  password: '',
  username: ''
})

const handleOk = (e) => {
  userStore.handleSignup(userCredentials)
  console.log('error message', errorMessage)
  // open.value = false;
};

const props = defineProps(['isLogIn'])

const title = props.isLogIn ? 'Login' : 'Signup'

</script>

<template>
  <div>
    <a-button 
        type="primary" 
        class="btn" 
        @click="showModal"
    >
        {{ title }}
    </a-button>
    <a-modal v-model:open="open" :title="title" @ok="handleOk" class="modal-container">
        <a-input v-if="isLogIn == false" v-model:value="userCredentials.username" placeholder="Username" /> 
        <a-input v-model:value="userCredentials.email" placeholder="email" />
        <a-input v-model:value="userCredentials.password" placeholder="password" type="password" />
        <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
    </a-modal>
  </div>
</template>

<style scoped>
.btn {
    margin-left: 10px;
}

.modal-container input {
    margin-bottom: 12px;
}
 

</style>