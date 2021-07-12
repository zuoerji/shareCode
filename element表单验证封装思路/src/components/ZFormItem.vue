<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="error">{{error}}</p>
    </div>
</template>
<script>
import Schema from "async-validator"
export default {
    inject:['form'],
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String
        }
    },
    data(){
        return {
            error:''
        }
    },
    methods:{
        validate(){
            // 规则
            const rules = this.form.rules[this.prop]
            const value = this.form.model[this.prop]
            const rulesObj = {[this.prop]:rules}
            const schema = new Schema(rulesObj)

            return schema.validate({[this.prop]:value},err=>{
                console.log(err,22)
                if(err){
                    this.error = err[0].message
                }else{
                    this.error = ""
                }
            })
        }
    }
}
</script>