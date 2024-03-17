<script setup>
import {reactive, ref} from 'vue'
import { storeToRefs } from 'pinia'
import {useUserStore} from '../stores/users'

const open = ref(false);
const userStore = useUserStore()
const {errorMessage, loading, user} = storeToRefs(userStore)

const showModal = () => {
  open.value = true;
};

const userCredentials = reactive({
  email: '',
  password: '',
  username: ''
})

const clearUserCredentials = () => {
  userCredentials.email = ''
  userCredentials.password = ''
  userCredentials.username = ''
}

const handleOk = async (e) => {
  // console.log('error message', errorMessage)
  // open.value = false;
  if(props.isLogIn) {
    await userStore.handleLogin({
      password: userCredentials.password,
      email: userCredentials.email
    })
  }
  else {
    await userStore.handleSignup(userCredentials)

  }
  if (user.value) {
    clearUserCredentials()
    userStore.clearErrorMessage()
    open.value = false
  }
};

const handleCancel = () => {
  userStore.clearErrorMessage()
  open.value = false
}

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
    <a-modal v-model:open="open" :title="title" class="modal-container">
        <template #footer>
          <a-button key="back" @click="handleCancel">Cancel</a-button>
          <a-button 
            key="submit" 
            type="primary" 
            @click="handleOk"
            :disabled="loading"
        >
          Submit
        </a-button>
        </template>
        <div class="input-container" v-if="!loading">
          <a-input v-if="isLogIn == false" v-model:value="userCredentials.username" placeholder="Username" /> 
          <a-input v-model:value="userCredentials.email" placeholder="email" />
          <a-input v-model:value="userCredentials.password" placeholder="password" type="password" />
        </div>
        <div class="spinner" v-else> 
          <a-spin></a-spin>
        </div>
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
 
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
}
</style>