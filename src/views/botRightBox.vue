<template>
  <div id="botRightBox">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
         <img src="../assets/circle.png" alt="" style="width:0.15rem;height:0.15rem;">
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">本年度上线变更前十</span>
        </div>
      </div>
      <div class="tab clearfix" style="clear:both">
        <p>排名</p>
        <p>姓名</p>
        <!-- <p>上线数量</p> -->
        <p>变更数量</p>
      </div>
      <ul class="paiLi">
       <li class="clearfix" v-for="(t,index) in topTenChangeTotal" :key="index">
         <span class="num" v-if="index == 0"><img src="../assets/index_03.png" alt="" width="30"></span>
         <span class="num" v-if="index == 1"><img src="../assets/index_06.png" alt="" width="30"></span>
         <span class="num" v-if="index == 2"><img src="../assets/index_08.png" alt="" width="30"></span>
         <span class="num" v-if="index>=3">{{index+1}}</span>
         <span class="name">{{t.RQ_USER_TEMPLATE_10}}</span>
         <!-- <span class="pop">{{t.sNum}}</span> -->
         <span class="change">{{t.req_count}}</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      topTenChangeTotal:[]
    };
  },
  components: {
   
  },
  mounted() {
    this.topTenChangeTotal=JSON.parse(sessionStorage.getItem('topTenChangeTotal'));
  },
  methods: {}
};
</script>

<style lang="scss">
.clearfix:after{
    content:'';
    display: none;
    clear:both;
}
#botRightBox {
  padding: 0.3rem 0.2rem;
  height: auto;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: auto;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
  .tab{
      height:0.7rem;
      line-height: 0.7rem;
      font-size:0.25rem;
      margin-top: 0.5rem;
  }
  .tab p{
      float:left;
      width: 33%;
      text-align: center;
      font-size: 0.3rem;
  }
  .paiLi li{
      height:0.9rem;
      line-height: 0.9rem;
  }
  .paiLi li img{
    vertical-align: middle;
  }
  .paiLi li span{
      font-size:0.3rem;
      width:33%;
      display: inline-block;
      text-align: center;
  }
  .paiLi li span.change{
      color:#02e1e9;
  }
}
</style>