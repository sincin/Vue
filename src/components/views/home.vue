<template>
    <div>
      <span @click="changeLangEvent()" style="color: blue;cursor: pointer">中/英文切换</span>
      <a  class="h-logo" >
        {{$t('m.music')}}
      </a>
    </div>
</template>

<script>
    export default {
      data () {
        return {

        }
      },
      methods: {
        changeLangEvent() {
          if ( this.lang === 'zh-CN' ) {
            this.lang = 'en-US';
            this.$i18n.locale = 'en-US';
          }else {
            this.lang = 'zh-CN';
            this.$i18n.locale = this.lang;
          }
        }
      }
    }
</script>

<style scoped>

</style>
