<template>
    <div>
        <h2>child1组件</h2>
        info：{{info}}
        <button @click="sendFather">通过$emit传递给父组件</button>
    </div>
</template>
<script>
export default {
    props:['info'],
    data(){
        return {}
    },
    methods:{
        sendFather(){
            this.$emit('sendFather','子组件传递给父组件的数据')
        }
    }
}
</script>