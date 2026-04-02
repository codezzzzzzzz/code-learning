<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  data: {
    type: String,
    default: ''
  }
})

const list = ref(['html', 'css', 'js'])

watch(() => props.data, (newVal) => {
  if (newVal) {
    list.value.push(newVal)
  }
})

</script>

<style lang="css" scoped></style>