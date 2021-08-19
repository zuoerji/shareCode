<template>
    <div>
        <h2>child7组件</h2>
        <GrandChild />
    </div>
</template>
<script>
import GrandChild from './GrandChild'
export default {
    components:{
        GrandChild
    },
    name:'child7',
    data(){
        return {
            message:'child7',
            info:''
        }
    }
}
</script>