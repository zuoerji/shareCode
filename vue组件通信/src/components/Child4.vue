<template>
    <div>
        <h2>child4组件</h2>
        <button @click="send">$parent传递给父组件的数据</button>
        info:{{info}}
    </div>
</template>
<script>
export default {
    name:'child4',
    data(){
        return {
            message:'child4',
            info:''
        }
    },
    methods:{
        send(){
            this.$parent.info = "子组件传递数据给父组件"
        }
    }
}
</script>