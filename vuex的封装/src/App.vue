<template>
  <div id="app">
      <div id="nav">
        <h1>vuex 封装思路</h1>
        <p @click="$store.commit('add')">count：{{$store.state.count}}</p>
        <p @click="$store.dispatch('add')">异步 count:{{$store.state.count}}</p>
        <p>getters: {{$store.getters.getterCount}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {}
  },
  methods:{
    commit(){

    }
  }
}
</script>

<style>
  #app{
    margin-top:100px;
    text-align: center;
  }
</style>
