<template>
    <div>
        <h1>兄弟2</h1> 
        info:{{info}}
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
    created(){
        let _this = this
        eventBus.$on('borther',(value)=>{
            _this.info = value
        })
    }
}
</script>