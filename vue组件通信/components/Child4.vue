<template>
    <div>
        <h1 v-on="$listeners">这是 子组件</h1>
    </div>
</template>
<script>
export default {
  
    data(){
        return {
            info:'$listener子组件'
        }
    },
    methods:{
      
    }
}
</script>