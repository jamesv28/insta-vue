<script setup>
const props = defineProps(['images'])
</script>

<template>
    <div class="image-container">
        <img 
            v-for="img in images" 
            :key="img.id"
            :src="img.url"
            :alt="img.name"
        />
    </div>   
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

img {
    margin: 5px;
    width: 200px;
}
</style>