<template>
    <div>
        <h1>这是 父组件</h1>
        info <span>{{info}}</span>
        <Child  :info="message" @send="send"/>
        <hr>
        <Borther1/>
        <Borther2/>
        <hr>
        <Child2/>
        <button @click="childrenSend">$children传递数据</button>
        info:{{childInfo}}
        <hr>
        <button @click="sendGrandSon">provide/inject传递数据</button>
        <Child3/>
        <hr>
        <Child4 @click="listenerFn" />
    </div>
</template>
<script>
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import Borther1 from './Bother1'
import Borther2 from './Bother2'
export default {
    components:{
        Child,
        Child2,
        Child3,
        Child4,
        Borther1,
        Borther2
    },
    provide(){
        return {
            vueInfo:this
        }
    },
    data(){
        return {
            message:'这是父组件的数据',
            info:'',
            childInfo:'',
            grandSonInfo:''
        }
    },
    methods:{
        send(value){
            console.log(value)
            this.info = value
        },
        childrenSend(){
            this.$children[3].info="父组件传递的数据"
        },
        sendGrandSon(){
            this.grandSonInfo = "爷爷组件传递的数据"
        },
        listenerFn(){
            console.log('listener',this)
        }
    }
}
</script>