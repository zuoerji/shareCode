<template>
    <div>
        <h2>孙组件</h2>
        info:{{vueInfo.grandChildInfo}}
    </div>
</template>
<script>
export default {
    inject:['vueInfo'],
    data(){
        return {
            info:''
        }
    }
}
</script>