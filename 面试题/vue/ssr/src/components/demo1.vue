<template>
  <div>
    demo1
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue'
onBeforeMount(() => {
  console.log('挂载前')
})
onMounted(() => {
  console.log('挂载后')
})
onBeforeUnmount(() => {
  console.log('卸载前')
})
onUnmounted(() => {
  console.log('卸载后')
})

onActivated(() => {
  console.log('激活')
})
onDeactivated(() => {
  console.log('失活')
})
</script>

<style lang="css" scoped>

</style>