<template>

  <div class="head">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child :list="list"/>

</template>

<script setup>
import Child from './child.vue'
import { ref } from 'vue'

const list = ref(['html', 'css', 'js'])
const msg = ref('')
const add = () => {
  list.value.push(msg.value)
}
</script>

<style lang="css" scoped>

</style>