<script setup>
import UploadPhotoModal from './UploadPhotoModal.vue'

const props = defineProps(['username', 'userinfo'])
</script>

<template>
    <div class="userbar-container">
        <div class="top-content">
            <a-typography-title :level="2">{{ username }}</a-typography-title>
            <upload-photo-modal />
        </div>
        <div class="bottom-content">
            <a-typography-title :level="5">{{ `${userinfo.posts} posts` }}</a-typography-title>
            <a-typography-title :level="5">{{ `${userinfo.followers} followers` }}</a-typography-title>
            <a-typography-title :level="5">{{ `${userinfo.following} following` }}</a-typography-title>


        </div>
    </div>
</template>

<style scoped>
.userbar-container {
    display: flex;
    padding-bottom: 75px;
    flex-direction: column;
    padding-left: 40px;
}

.bottom-content {
    display: flex;
    align-items: center;
}

.top-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom-content h5 {
    margin: 0;
    padding: 0;
    margin-right: 30px;
}
</style>