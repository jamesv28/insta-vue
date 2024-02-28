<script setup>
const props = defineProps(['people'])
</script>

<template>
    <a-card hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="people.url" />
    </template>
    <a-card-meta :title="people.name">
      <template #description>{{ people.name }}</template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
.card {
    margin-bottom: 12px;
}
</style>