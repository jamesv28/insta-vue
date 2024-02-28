<script setup>
import {ref} from 'vue'

const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};

const props = defineProps(['isLogIn'])

const title = props.isLogIn ? 'Login' : 'Signup'

const username = ref('')
const email = ref('')
const password = ref('')

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
        <a-input v-if="isLogIn == false" v-model:value="username" placeholder="Username" />   
        <a-input v-model:value="email" placeholder="email" />
        <a-input v-model:value="password" placeholder="password" />
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