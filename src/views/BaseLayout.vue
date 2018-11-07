<template>
  <el-container class="container">
    <el-header class="header">
      <div class="logo">
        铁水炉外温控监测平台
      </div>
      <div class="nav">
        <el-menu default-active="1" class="menu" mode="horizontal">
          <el-menu-item index="1"><!-- <i class="el-icon-home"/>  -->首页</el-menu-item>
          <el-menu-item index="2" @click="turn"><!-- <i class="el-icon-lock"/>  -->登录</el-menu-item>
          <el-menu-item index="3" @click="turns">新增</el-menu-item>
          <!-- <el-dialog title="新增" :visible.sync="dialogVisible"></el-dialog> -->
          <!-- <el-menu-item index="5" disabled>消息中心</el-menu-item> -->
          <el-submenu index="4">
            <template slot="title">
              <!-- <i class="el-icon-user"/> -->
              用户</template>
            <el-menu-item index="4-1">更改密码</el-menu-item>
            <el-menu-item index="4-2">退出系统</el-menu-item>        
          </el-submenu>
          

        </el-menu>
      </div>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
      <!-- <div class="copyright">
        Copyright
      </div> -->
    </el-main>
    <!-- <el-footer class="footer">Footer</el-footer> -->
  </el-container>
</template>

<script>
import LtForm from '@/views/LtForm'

export default {
  components:{LtForm},
  data() {
    return {
      
    }
  },
  methods:{
    turn(){
      this.$router.push({
        path:"/login"
      })
    },
    turns(){
      this.$router.push({
        path:"/ltform"
      })
    }
  }
}
</script>


<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    z-index: 100;
    height: 60px;
    line-height: 56px;
    background-color: #fff;
    /* background-color: rgb(240, 138, 56); */
    color: #333;
    box-shadow: 0 2px 6px 2px rgba(0,0,0,.1);
    .logo {
      font-weight: 400;
    }
    .nav {
      text-align: right;
      .menu {
        border-bottom: 0;        
      }
    }
  }
  /* .footer {
    display: fixed;
    width: 200px;
    height: 30px; 
    line-height: 30px;
    background-color: #fff;
    color: #333;
    bottom: 0;
    right: 0;
  } */
  .main {
    background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-grow: 1;
    .copyright {
      display: fixed;
      width: 200px;
      height: 30px; 
      line-height: 30px;
      background-color: #fff;
      color: #333;
      bottom: 0;
      right: 0;
    }
  }
}
/* .el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  position: fixed;
  width: 100%;
}
.el-header {
  top:0;
}

.el-footer {
  bottom: 0;
}
  
.el-main {
  background-color: #E9EEF3;
  color: #333;
  position:absolute;
  top: 60px;
  bottom: 60px;
  left: 0;
  right: 0;
} */
</style>
