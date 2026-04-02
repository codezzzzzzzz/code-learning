<template>
  <div class="bd">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})


const list = ref(['html', 'css', 'js'])
watch(
  () => props.msg, 
  (newVal) => {
    list.value.push(newVal)
  }
)
</script>

<style lang="css" scoped>

</style>