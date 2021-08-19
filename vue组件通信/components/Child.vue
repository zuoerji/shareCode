<template>
    <div>
        <h1>这是 子组件</h1>
        info111: <span>{{info}}</span>
        <button @click="send">传递数据给父组件</button>
    </div>
</template>
<script>
export default {
    props:['info'],
    data(){
        return {}
    },
    methods:{
        send(){
            this.$emit('send','子组件传递的数据')
        }
    }
}
</script>