<template>
  <div id="app">
      <div id="nav">
        <h1>vue 路由封装思路</h1>
        <router-link to="/home">首页</router-link>
        <router-link to="/detail">详情页</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    margin-top:100px;
    text-align: center;
  }
</style>
