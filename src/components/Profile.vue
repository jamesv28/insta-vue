<script setup>
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
        <h3>userbar</h3>
        <h3>image gallery</h3>
    </div>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>