<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    provide(){
        return {
            form:this
        }
    },
    props:{
        rules:{
            type:Object,
            default:()=>{}
        },
        model:{
            type:Object,
            require:true
        }
    },
    methods:{
        validate(cb){
            const item = this.$children
            .filter(item=>item.prop)
            .map(item=>item.validate())

            Promise.all(item).then(()=>cb(true))
            .catch(()=>cb(false))
        }
    }
}
</script>