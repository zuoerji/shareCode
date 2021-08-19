<template>
    <div>
        <h1>这是 子组件</h1>
        <GrandSon/>
        
    </div>
</template>
<script>
import GrandSon from './GrandSon'
export default {
    components:{
        GrandSon
    },
    data(){
        return {
            info:''
        }
    },
    methods:{
      
    }
}
</script>