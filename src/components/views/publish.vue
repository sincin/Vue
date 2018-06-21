<template>
  <div class="publish-container">
    <header-top :head-title="title" goBack="true"></header-top>
    <el-form  ref="form" :model="form" label-width="90px" class="publish-form">
      <el-form-item label="主题" >
        <el-input v-model="form.subject"></el-input>
      </el-form-item>
      <el-form-item label="类别" >
        <el-select v-model="value" placeholder="请选择" style="width: 100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效时期至" >
        <el-date-picker
          v-model="time"
          type="date"
          placeholder="选择日期" style="width: 100%">
        </el-date-picker>
      </el-form-item>

        <el-button type="primary" >保存</el-button>
        <el-button>取消</el-button>
        <el-button>保存为草稿</el-button>

    </el-form>
  </div>

</template>

<script>
  import headerTop from '../component/header'
    export default {
      data:function () {
        return{
          title:'发布需求',
          value:'',
          time:'',
          form:{
            subject:''
          },
          options:[
            {value:1,label:'wdfesf'},
            {value:2,label:'dfdfdff'},
            {value:3,label:'erersddc'}
          ]
        }
      },
      components: {
        headerTop
      },
    }
</script>

<style lang="less">
.publish-container{
  padding-top: 1.3rem;
  .publish-form{
    padding: 0.2rem;
    .el-form-item__label{
      text-align: left;
    }
  }
}
</style>
