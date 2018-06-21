<template>
  <div class="index-container">
    <header-top :head-title="$t('m.nav[2]')" ></header-top>
    <footer-bottom></footer-bottom>
  </div>

</template>

<script>
  import headerTop from '../component/header'
  import footerBottom from '../component/footer'
  export default {
    name: "index",
    data: function () {
      return {

      }
    },
    components: {
      headerTop,
      footerBottom
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
