<template >
    <div>
        <h2>父组件(props/$emit)</h2>
        info:{{childMessage}}
        <Child1 :info="childInfo" @sendFather="getChildInfo"/>
        <hr>
        <h2>父组件(eventBus)</h2>
        <Child2/>
        <Child3/>
        <hr>
        <h2>父组件($parent/$children)</h2>
        <button @click="sendChild">$chidren传递给子组件数据</button>
        info:{{info}}
        <Child4 />
        <hr>
        <h2>父组件($root)</h2>
        <Child5 />
        info:{{rootInfo}}
        <hr>
        <h2>父组件($refs)</h2>
        <button @click="sendRef">$refs传递给子组件</button>
        <Child6 ref="child"/>
        <hr>
        <h2>父组件(provide/inject)</h2>
        <Child7 />
        <hr>
        <h2>父组件($attrs)</h2>
        <Child8 :info="attrsInfo" />
        <hr>
        <h2>父组件($listener)</h2>
        <Child9 @click="listenerFn"/>
    </div>
</template>
<script>
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import Child5 from './Child5'
import Child6 from './Child6'
import Child7 from './Child7'
import Child8 from './Child8'
import Child9 from './Child9'
export default {
    components:{
        Child1,
        Child2,
        Child3,
        Child4,
        Child5,
        Child6,
        Child7,
        Child8,
        Child9
    },
    provide(){
        return {
            vueInfo:this
        }
    },
    data(){
        return {
           childInfo:'传递给子组件的数据',
           childMessage:'',
           info:'',
           rootInfo:'',
           grandChildInfo:'传递给孙组件的数据',
           attrsInfo:'传递给子组件的数据'
        }
    },
    methods:{
        getChildInfo(value){
            this.childMessage = value
        },
        sendChild(){
            this.$children[3].info = "父组件传递给子组件的数据"
        },
        sendRef(){
            console.log(this.$refs)
            this.$refs.child.info = "父组件传递子组件的数据"
        },
        listenerFn(){
            console.log('listener',this)
        }
    }
}
</script>