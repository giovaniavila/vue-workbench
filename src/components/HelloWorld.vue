<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <Global/>
</template>

<style scoped>
.read-the-docs {
  color: #ffffff;
}
</style>
