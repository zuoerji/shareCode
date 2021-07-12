<template>
    <div class="login">
        <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model.trim="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input type="password" v-model.trim="form.password" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('form')">登陆</el-button>
          </el-form-item>
        </el-form>
        <ZForm :model="userInfo" :rules="rules" ref="loginForm">
          <ZFormItem label="用户名" prop="username">
            <ZInput type="text" v-model="userInfo.username"></ZInput>
          </ZFormItem>
          <ZFormItem label="密码"  prop="password">
            <ZInput type="password" v-model="userInfo.password"></ZInput>
          </ZFormItem>
          <ZFormItem >
            <button @click="login('loginForm')">登录</button>
          </ZFormItem>
        </ZForm>
    </div>
</template>
<script>
import ZInput from "@/components/ZInput"
import ZFormItem from "@/components/ZFormItem"
import ZForm from "@/components/ZForm"
  export default {
    components:{
      ZInput,
      ZFormItem,
      ZForm
    },
    data() {
      return {
        form: {
          username:'',
          password:'',
        },
        userInfo:{
          username:'',
          password:'',
        },
        rules: {
          password: [
            { required: true,message:"请输入密码" }
          ],
          username: [
            { required: true,message:"请输入用户名" }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if(valid){
            alert("验证通过")
          }else{
            alert("验证不通过")
          }
        });
      },
      login(formName){
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if(valid){
            alert("验证通过")
          }else{
            alert("验证不通过")
          }
        });
      }
    }
  }
</script>
<style scoped>
    .login{
        width: 500px;
        margin:0 auto;
    }
</style>

