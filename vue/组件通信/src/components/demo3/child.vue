<template>
  <div class="hd">
    <input type="text" v-model="inputValue">
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const inputValue = ref('')

const emit = defineEmits(['adds']) // 定义一个事件
const add = () => {
  // inputValue传给父组件
  emit('adds', inputValue.value) // 发布该事件，并传递参数
  inputValue.value = ''
}
</script>

<style lang="scss" scoped>

</style>