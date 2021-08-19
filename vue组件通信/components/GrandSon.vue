<template>
    <div>
        <h1>这是 孙组件</h1>
        info:{{vueInfo.grandSonInfo}}
    </div>
</template>
<script>
export default {
    inject:['vueInfo'],
    data(){
        return {}
    }
}
</script>