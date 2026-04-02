<template>
  <div class="head">
    <slot :count="1"></slot>
  </div>
  
</template>

<script setup>

</script>

<style lang="css" scoped>
.head{
  width: 100%;
  height: 60px;
  background-color: #f5dada;
}
.container{
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
}
.left{
  width: 200px;
  background-color: azure;
}
.right{
  flex: 1;
  background-color: #e9f4d6;
}
</style>