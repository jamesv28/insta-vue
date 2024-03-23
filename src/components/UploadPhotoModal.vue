<script setup>
import { ref } from 'vue';
const open = ref(false);
const caption = ref('')
const file = ref('')
const showModal = () => {
  open.value = true;
};

const uploadPHoto = () => {
    open.value = true

}

const handleUploadChange = (e) => {
  if(e.target.files[0]) file.value = e.target.files[0]
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
          <input type="file" accept=".jpeg, .jpg, .png" required @change="handleUploadChange">
          <input type="text" placeholder="Caption" required maxlength="50" v-model="caption"/>
        </a-modal>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin-top: 10px;
  width: 100%;
}
</style>