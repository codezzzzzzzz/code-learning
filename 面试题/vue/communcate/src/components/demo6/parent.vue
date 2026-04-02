<template>
  <Child v-model:list="list"/>

  <div class="body">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import Child from './child.vue'
import { ref } from 'vue'

const list = ref(['html', 'css', 'js'])

</script>

<style lang="css" scoped>

</style>