<script setup>
import Card from './Card.vue'
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
  <div class="timeline-container">
    <Card 
      v-for="people in data" 
      :key="people.id"
      :people="people"
    />
  </div>  
</template>

<style scoped>
.timeline-container {
  margin-top: 12px;
}
</style>