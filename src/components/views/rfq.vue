<template>
  <div class="rfq-container">
    <header-top :head-title="$t('m.nav[1]')" ></header-top>
    <scroller :on-refresh="refresh" :on-infinite="infinite" class="rfq-lists">
     <el-row v-for="(item, index) in list" :key="index" class="rfq-list">
           <el-col :span="4">
             <img src="../../assets/image/default_img1_1.png"/>
           </el-col>
          <el-col :span="20" class="rfq-company-info">
            <p><span>主题：</span>{{item.subject}}</p>
            <p><span>公司名称：{{item.buyer_company_name}}</span></p>
            <p><span>创建人：{{item.creator_name}}</span></p>
          </el-col>
     </el-row>
    </scroller>
    <footer-bottom></footer-bottom>
  </div>

</template>

<script>
  import headerTop from '../component/header'
  import footerBottom from '../component/footer'
  const PAGESIZE = 10;
  export default {
    created(){
      this.getMyRfqOfflineList()
    },
    data: function () {
      return {
        page:1,
        pagesize:10,
        list:''
      }
    },
    components: {
      headerTop,
      footerBottom
    },
    methods:{
      refresh (done) {
        console.log('下拉刷新');
        this.getMyRfqOfflineList((isNoData) => {
          this.$nextTick(() => {
            setTimeout(() => {
              done(isNoData);
            }, 500);
          });
        }, true, false);
      },
      infinite (done) {
        console.log('上啦加载更多');
        this.getMyRfqOfflineList((isNoData) => {
          this.$nextTick(() => {
            setTimeout(() => {
              done(isNoData);
            }, 500);
          });
        }, false, true);
      },
      getMyRfqOfflineList: function(callback, isRefresh, isInfinite) {
        let params ={};
        let pageSize = PAGESIZE;
        if (isRefresh) {
          pageSize = this.page * PAGESIZE;
        }
        if (isInfinite) {
          this.page++;
        } else if (isRefresh) {
          this.page = 1;
        }

        params.currentPage = this.page;
        params.pageSize = pageSize;
        this.$api({
          url:'/offlinerfqs?fields=sentcount,sentbymycount,exportpdfcount,exportpdfbymycount',
          method: "get",
          params: params
        })
          .then(resp => {
            let res = resp.data;
            if (res.code === 200) {

              let isNoData = false;
              if (res.data.length < PAGESIZE) {
                isNoData = true;
                this.isNoData = true;
              } else {
                this.isNoData = false;
              }
              if (this.list && isInfinite) {
                this.list = this.list.concat(res.data);
              }else{
                this.list = res.data;
              }
              callback && callback(isNoData);
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
    }
  }
</script>

<style lang="less">
.rfq-container{
  padding-top: 1.95rem;
  .rfq-lists{
    top:45px;
    bottom: 45px;
    height: auto !important;
    .rfq-list{
      padding: 0.4rem;
      img{
        width: 100%;
        height: 100%;
      }
      .rfq-company-info{
        text-align: left;
        padding-left: .6rem;
      }
    }
  }
}
</style>
