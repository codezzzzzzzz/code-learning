<template>

  <div class="head">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child :data="data"/>

</template>

<script setup>
import Child from './child.vue'
import { ref } from 'vue'
const msg = ref('')
const data = ref('')
const add = () => {
  data.value = msg.value
}
</script>

<style lang="css" scoped>

</style>