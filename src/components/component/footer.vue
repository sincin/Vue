<template>
  <el-row class="bottom-container">
    <el-col :span="6"><router-link to="/index" >{{$t('m.nav[0]')}}</router-link></el-col>
    <el-col :span="6"><router-link to="/rfq" exact>{{$t('m.nav[1]')}}</router-link></el-col>
    <el-col :span="6"><router-link to="/demand" exact>{{$t('m.nav[2]')}}</router-link></el-col>
    <el-col :span="6"><router-link to="/my" exact>{{$t('m.nav[3]')}}</router-link></el-col>
  </el-row>
</template>

<script>
    export default {
      data: function () {
        return {

        }
      }
    }
</script>

<style lang="less">

.bottom-container{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  a{
    color: #fff;
    font-size: 20px;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: #3190e8;
    &.active{
      background: blue !important;
    }
  }
}
</style>
