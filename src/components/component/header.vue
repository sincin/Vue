<template>
<div class="header-top">
  <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
    </svg>
  </section>
  <section class="title_head ellipsis" v-if="headTitle">
    <span class="title_text">{{headTitle}}</span>
  </section>
</div>
</template>

<script>
    export default {
      props: ['headTitle', 'goBack'],
    }
</script>

<style lang="less">
.header-top{ background: #3190e8;
  height: 1.2rem;
  position: fixed;
  top: 0;
  right: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  .head_goback{
    width: 0.6rem;
    height: 1rem;
    line-height: 2.95rem;
    margin-left: .4rem;
  }
  .title_head{
    width: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
  }
}
</style>
