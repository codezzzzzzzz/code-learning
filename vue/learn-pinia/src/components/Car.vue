<template>
  <div class="car">
    <div class="total">
      <p>商品数量：{{carStore.selectNum}}</p>
      <p>合计：{{carStore.totalPrice}}</p>
    </div>
    <div class="pay">结算</div>
  </div>
</template>

<script setup>
import { useCarStore } from '../store/car.js'
const carStore = useCarStore()

</script>

<style lang="css" scoped>
.car{
  width: 1000px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
</style>