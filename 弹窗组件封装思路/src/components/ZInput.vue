<template>
    <input :type="type" :value="value" @input="inputChange">
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default:'text'
        },
        value:{
            type:String
        }
    },
    methods:{
        inputChange(e){
            this.$emit('input',e.target.value)
            this.$parent.validate()
        }
    }
}
</script>