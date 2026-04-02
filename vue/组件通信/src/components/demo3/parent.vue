<template>
  <child @adds="adds"/>

  <div class="bd">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>

</template>

<script setup>
import child from './child.vue'
import { ref } from 'vue'

const list = ref(['html', 'css', 'js'])

const adds = (e) => {
  console.log(e);
  list.value.push(e)
}
</script>

<style lang="scss" scoped>

</style>