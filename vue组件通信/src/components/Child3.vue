<template>
    <div>
        <h2>child3组件</h2>
        <button @click="send">eventBus传递数据</button>
        
    </div>
</template>
<script>
import eventBus from '@/util/eventBus'
export default {
    data(){
        return {}
    },
    methods:{
        send(){
            eventBus.$emit('borther','传递给兄弟组件的数据')
        }
    }
}
</script>