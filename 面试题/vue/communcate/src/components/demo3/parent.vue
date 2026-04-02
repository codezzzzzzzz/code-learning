<template>

  <div class="head">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child/>

</template>

<script setup>
import Child from './child.vue'
import { ref, provide, readonly } from 'vue'

const msg = ref('')
const list = ref(['html', 'css', 'js'])
const add = () => {
  // list.value.push(msg.value)
  console.log(list.value);
}

provide('list', readonly(list.value))  // 向下提供数据

</script>

<style lang="css" scoped>

</style>