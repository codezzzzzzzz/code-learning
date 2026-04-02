<template>
  <van-nav-bar :title="title" left-arrow @click-left="goBack"/>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: ''
  }
})

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style lang="less" scoped>

</style>