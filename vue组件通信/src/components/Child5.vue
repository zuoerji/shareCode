<template>
    <div>
        <h2>child5组件</h2>
        <button @click="send">$root传递数据给父组件</button>
    </div>
</template>
<script>
export default {
    name:'child5',
    data(){
        return {
            message:'child5',
            info:''
        }
    },
    methods:{
        send(){
            console.log(this.$root.$children[0].$children[0].$children[0])
            this.$root.$children[0].$children[0].$children[0].rootInfo = "子组件传递的数据"
        }
    }
}
</script>