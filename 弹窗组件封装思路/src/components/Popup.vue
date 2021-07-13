<template>
    <div class="box" v-if="isShow">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        message:{
            type:String,
            default:''
        },
        duration:{
            type:Number,
            default:1000
        }
    },
    data(){
        return {
            isShow:true
        }
    },
    methods:{
        show(){
            this.isShow = true
            setTimeout(this.hide,this.duration)
        },
        hide(){
            this.isShow = false
            this.remove()
        }
    }
}
</script>
<style scoped>
.box{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 200px;
    background-color: rgba(0,0,0,0.5);
}
</style>