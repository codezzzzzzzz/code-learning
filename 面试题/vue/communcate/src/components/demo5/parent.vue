<template>
  <Child ref="childRef"/>

  <div class="body">
    <ul>
      <li v-for="(item, index) in childRef?.list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import Child from './child.vue'
import { ref } from 'vue'

const childRef = ref(null)

setTimeout(() => {
  console.log(childRef.value.list)
}, 1000)

</script>

<style lang="css" scoped>

</style>