<template>
  <div>
    <el-form :model="user" :rules="loginRules" ref="signInForm" label-position="left" class="form-header">
          <div>
            <!-- <img src="../assets/xglogo.png" class="logo-img" /> -->
            <div>铁水炉外温控监测平台</div>
          </div>    
          <el-form-item prop="username">
            <el-input type="text" v-model="user.username" auto-complete="off" placeholder="账号" prefix-icon="iconfont icon-account" @keyup.enter="signIn"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码" prefix-icon="iconfont icon-lock" @keyup.enter="signIn"></el-input>
          </el-form-item>
          <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
          <el-form-item >
            <el-button type="primary" style="width:100%;" @click.native.prevent="signIn" :loading="logining">登录</el-button>      
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
// import { loginReq } from '@/api/login'
export default {
  data() {
    return {
      logining:false,
      user:{
        username:'test',
        password:'111111',
      },
      loginRules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    // singIn(ev) {
    //   var _this=this
    //   this.$refs.singInForm.validate((valid) =>{
    //     if (valid){
    //       this.logining=true
    //       let datas ={user_code:this.user.username,user_password:new Buffer(this.user.password).toString('base64')}
    //       api.requestLogin(datas).then(res =>{
    //         this.logining = false
    //         if(res && res.data.token){
    //           this.store.commit('setUser',res.data)
    //           this.getAuthMenu()
    //         }else{
    //           this.$message('登录失败')
    //         }
    //       }).catch(error => {
    //         this.logining=false
    //         this.$message('登录失败')
    //       })
    //     }else{
    //       return false
    //     }
    //   })
    // },
    // getAuthMenu(){
    //   api.getMenuList().then(data => {
    //     if(data){
    //       this.$store.commit('setUserMenu',data)
    //       this.$router.push({path:'/'})
    //     }
    //   }).catch(error => {
    //     this.$message('登录失败')
    //   })
    // }
    // signIn(){
    //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
    //     this.$router.push({ path: '/' }); //登录成功之后重定向到首页
    //   }).catch(err => {
    //     this.$message.error(err); //登录失败提示错误
    //   })
    // }

  }
}
</script>

<style>
 .form-header{
   width: 350px;
   padding: 50px 35px 5px 35px;
   background:#acc;
   margin:180px auto;
   
 }
</style>
