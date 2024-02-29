<script setup>
import UserBar from '../components/UserBar.vue'
import ImageGallery from '../components/ImageGallery.vue'

const data = [
  {
    id: 1,
    name: 'dolph lundgren',
    url: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/76188_v9_bb.jpg'
  },
  {
    id: 2,
    name: 'the business',
    url: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/chiefs/nnvoktjaxjtcxt7zsyri'
  },
  {
    id: 3,
    name: 'travis kelce',
    url: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/chiefs/shcz08ej2eowvjhhwakj'
  }
]
</script>

<template>
    <div class="profile-container">
        <user-bar
            username="james"
            :userinfo="{
                posts: 4,
                followers: 100,
                following: 400
            }"
        />
        <h3>image gallery</h3>
        <ImageGallery :images="data" />
    </div>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
</style>