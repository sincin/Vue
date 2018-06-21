<template>
<div class="setting-container">
  <header-top :head-title="$t('m.setting')" goBack="true"></header-top>
  <div class="setting-content">
    <el-form>
    <el-form-item :label="$t('m.selectLang')" class="select-lang">
      <el-select  placeholder="请选择"  v-model="value" @change="changeLang()">
        <el-option :value="$t('m.lang[0]')"></el-option>
        <el-option :value="$t('m.lang[1]')"></el-option>
      </el-select>
    </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
  import headerTop from '../component/header'
  export default {
    created(){
      if(this.$i18n.locale == 'zh-CN'){
         this.value = '中文'
      }else {
        this.value = 'English'
      }
    },
    data: function () {
      return {
        value:'',
      }
    },
    components: {
      headerTop,
    },

    methods:{
      changeLang(){
        if(this.$i18n.locale == 'zh-CN'){
          if(this.value == '英文'){
            this.$i18n.locale = 'en-US';
            this.value = 'English'
          }
        }else {
          if(this.value == 'Chinese'){
            this.$i18n.locale = 'zh-CN';
            this.value = '中文'
          }
        }
      }
    }
  }
</script>

<style lang="less">
.setting-container{
  padding-top: 1.2rem;
  .setting-content{
    padding: 0.2rem 0.4rem;
    .select-lang{
      padding: 0.2rem 0;
      border-bottom: solid 1px #eee;
      .el-form-item__content{
        display: flex;
        justify-content: flex-end;
        .el-input__inner{
          width: 4rem;
        }
      }
    }
  }
}
</style>
