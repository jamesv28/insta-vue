<script setup>
import { ref } from 'vue';
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const uploadPHoto = () => {
    open.value = true

}

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
</script>

<template>
    <div>
        <a-button type="" @click="uploadPHoto">Upload Photo</a-button>
        <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        
        </a-modal>
  </div>
</template>