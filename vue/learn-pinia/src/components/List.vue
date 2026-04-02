<template>
  <div>
    <ul>
      <li v-for="(item, index) in carStore.listArr" :key="index">
        <img :src="item.pic" alt="">
        <p>{{ item.name }}</p>
        <p>{{ item.desc }}</p>
        <div class="price">
          <span>￥{{ item.price }}</span>
          <button @click="addCar(item)">加入购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCarStore } from '../store/car.js'

const carStore = useCarStore()

// console.log(carStore.listArr);
const addCar = (item) => {
  carStore.addSelectArr(item)  // 调用仓库的方法
}

</script>

<style lang="css" scoped>
ul{
  display: flex;
}
li{
  width: 224px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 10px;
}
img{
  width: 100%;
  height: 224px;
}
.price{
  display: flex;
  justify-content: space-between;
}
</style>