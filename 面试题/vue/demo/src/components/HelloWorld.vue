<template>
  <div @click="change">
    <h1 ref="h1Ref">{{msg}}</h1>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const msg = ref('Hello World')
const h1Ref = ref(null)
const change = () => {
  msg.value += '!'

  nextTick(() => { // 等待dom更新后执行
    console.log(h1Ref.value.innerText);
  }).then(() => {
    console.log('then');
  })
}

// nextTick(() => { // 等待dom更新后执行
//   console.log(h1Ref.value.innerText);
// }).then(() => {
//   console.log('then');
// })
</script>

<style lang="css" scoped>

</style>