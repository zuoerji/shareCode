<template>
    <div>
        <h2>child2组件</h2>
        info：{{info}}
        
    </div>
</template>
<script>
import eventBus from '@/util/eventBus'
export default {
    data(){
        return {
            info:''
        }
    },
    mounted(){
        let _this = this
        eventBus.$on('borther',(value)=>{
            _this.info = value
        })
    },
}
</script>