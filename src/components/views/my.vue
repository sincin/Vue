<template>
  <div class="my-container">
    <header class="my-header">
      <div class="user-info flex">
        <div class="user-head">
          <div class="pic">
            <img class="head-pic" src="../../assets/image/default_img1_1.png" width="100%" height="100%">
          </div>
        </div>
        <div class="uesr-base-info" v-if="cookie">
          <div class="name">fgdgdg</div>
          <span class="status">已审核</span>
        </div>
        <div class="user-login" v-if="!cookie">
          <router-link to="/login" class="login-btn">登录账号</router-link>
          <router-link to="/login" class="register-btn"></router-link>
        </div>
      </div>
      <div class="btn">
        <img src="../../assets/image/setting.png" class="setting-btn" @click="$router.push({path: '/setting'})">
      </div>
    </header>
    <el-row class="my-operation">
      <el-col :span="6">
        <router-link to="/publish">发布</router-link>
      </el-col>
    </el-row>
    <footer-bottom></footer-bottom>
  </div>

</template>

<script>

  import footerBottom from '../component/footer'
  import {getCookie} from "../../cookie/cookie";
  export default {
    created(){
      this.cookie = getCookie('access_token')
    },
    data: function () {
      return {
       cookie:' '
      }
    },
    components: {
      footerBottom
    },
    methods:{

    }
  }
</script>

<style lang="less">
.my-container{
  background: #ddd;
  height: 100%;
  .my-header{
    position: relative;
    width: 100%;
    height: 3.6rem;
    background: cornflowerblue;
    .btn{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      img{
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .user-info{
      align-items: center;
      position: absolute;
      top: 1rem;
      left: 0.4rem;
      display: flex;
      .pic{
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        background: #fff;
        position: relative;
      }
      .uesr-base-info{
        margin-left: 0.8rem;
        .name{
          font-size: 0.36rem;
          color: #fff;
          margin-bottom: 0.3rem;
        }
        .status{
          color: burlywood;
        }
      }
      .user-login{
        margin-left:0.5rem;
        .login-btn{
          display: block;
          color: blue;
          padding:0.1rem
        }
      }
    }


  }
  .my-operation{

  }
}
</style>
