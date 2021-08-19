<template>
    <div>
        <h2 v-on="$listeners">child9组件</h2>
    </div>
</template>
<script>
export default {
    name:'child9',
    data(){
        return {
            message:'child9',
         
        }
    }
}
</script>