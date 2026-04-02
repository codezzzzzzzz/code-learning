<template>
  <van-tabbar route v-model="active" active-color="rgb(55, 167, 98)">
    <van-tabbar-item icon="bill" to="/home">明细</van-tabbar-item>
    <van-tabbar-item icon="clock" to="/data">统计</van-tabbar-item>
    <van-tabbar-item icon="setting" to="/setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
</script>

<style lang="less" scoped>

</style>