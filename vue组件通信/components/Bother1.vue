<template>
    <div>
        <h1>兄弟1</h1> 
        <button @click="borther">传递数据给兄弟</button>
    </div>
</template>
<script>
import eventBus from '@/util/eventBus'
export default {
    data(){
        return {
        }
    },
    methods:{
        borther(){
            eventBus.$emit('borther','兄弟数据')
        }
    }
}
</script>