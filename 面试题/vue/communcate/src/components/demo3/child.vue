<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const list = inject('list')  // 注入数据
list.push('vue')
</script>

<style lang="css" scoped></style>