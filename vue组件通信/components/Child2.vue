<template>
    <div>
        <h1>这是 子组件</h1>
        <button @click="parentSend">$parent传递数据</button>
        info: <span>{{info}}</span>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:''
        }
    },
    methods:{
      parentSend(){
        //   this.$parent.childInfo = '传递给父组件数据'
         this.$root.$children[0].$children[0].$children[0].childInfo = '传递给父组件数据'
      }
    }
}
</script>