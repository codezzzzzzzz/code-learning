<template>
  <div class="head">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('')

const emit = defineEmits(['add'])  // 定义事件
const add = () => {
  emit('add', msg.value)
}
</script>

<style lang="css" scoped></style>