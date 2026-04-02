<template>
  <div class="head">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('')
const list = ref(['html', 'css', 'js'])
const add = () => {
  list.value.push(msg.value)
}

// 暴露数据
defineExpose({
  list
})
</script>

<style lang="css" scoped></style>