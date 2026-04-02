<template>
  <div>
    <keep-alive>
      <demo1 v-if="show"/>
    </keep-alive>
    
    <demo2 v-if="!show"/>
    <button @click="() => show = !show">切换</button>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import demo1 from './components/demo1.vue';
import demo2 from './components/demo2.vue';

const show = ref(false);

onBeforeMount(() => {
  console.log('父 beforeMount');
})
onMounted(() => {
  console.log('父 mounted');
})
onBeforeUnmount(() => {
  console.log('父 beforeUnmount');
})
onUnmounted(() => {
  console.log('父 unmounted');
})
</script>

<style lang="css" scoped>

</style>