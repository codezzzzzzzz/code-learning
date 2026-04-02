<template>
  <div class="home">
    <div class="head">
      <div class="logo">旅梦的后台管理系统</div>
      <div class="user">
        <span>Welcome, {{route.params.name}}</span>
      </div>
    </div>
    <div class="main">
      <div class="menu">
        <ul>
          <li>
            <router-link to="/home/user">用户管理</router-link>
          </li>
          <li>
            <router-link to="/article">文章管理</router-link>
          </li>
          <li>
            <router-link to="/catgory">分类管理</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <!-- xxxxxx -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route);

</script>

<style lang="css" scoped>
.head{
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  background-color: #79388f;
  color: #fff;
}
.main{
  display: flex;
  height: calc(100vh - 60px);
}
.menu{
  flex: 0 0 200px;
  height: 100%;
  background-color: #9b52b4;
}
.menu ul{
  list-style: none;
  text-align: center;
}
.menu ul li a{
  display: block;
  padding: 15px 0;
  color: #fff;
  cursor: pointer;
}
.content{
  flex: 1;
}
</style>