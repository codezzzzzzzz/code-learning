<template>
  <layout v-slot="slotProps">
    <div class="title">头部 -- {{slotProps.count}}</div>
  </layout>
</template>

<script setup>
import layout from './components/layout.vue';
</script>

<style lang="css" scoped>

</style>