<template>
  <div>
    demo22222
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
onBeforeMount(() => {
  console.log('子 beforeMount');
})
onMounted(() => {
  console.log('子 mounted');
})
onBeforeUnmount(() => {
  console.log('子 beforeUnmount');
})
onUnmounted(() => {
  console.log('子 unmounted');
})
</script>

<style lang="css" scoped>

</style>