<template>

  <div class="login-container">
    <header-top :head-title="title" goBack="true"></header-top>
    <el-form :model="form" label-width="50px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="form.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login()">登录</el-button>
    </el-form>

  </div>
</template>

<script>
  import headerTop from '../component/header'
  export default {
    data: function () {
      return {
        form: {
          username: '',
          password: ''
        },
        title:'登录'
      }
    },
    created: function () {
      if (this.$getCookie('user')) {
        this.form.username = this.$getCookie('user')
        this.form.password = this.$getCookie('pwd')
      }
    },
    components: {
      headerTop
    },
    methods: {
      login () {
        this.$api.post('/login', this.form).then(resp => {
          if (resp.data.code == '200') {
            let data = {
              user: this.form.username,
              access_token: resp.data.data.access_token,
              pwd: this.form.password
            };
            this.$store.dispatch('login', data);
            let redirection = '/' //Default route
            if(this.$route.query.redirect){ //If query has a prop redirect
              redirection = this.$route.query.redirect
            }else{
            }
            this.$router.replace(redirection);
          }
        })
      }
    }
  }
</script>

<style lang="less">
.login-container{
  padding-top: 1.95rem;
  .demo-ruleForm{
    margin: 1.2rem 0.4rem 0;
  }
}
</style>
