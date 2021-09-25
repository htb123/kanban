<template>
  <div id="centreRight2" style="overflow:hidden">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2" style="margin-top:0.2rem;margin-left:0.2rem">
        <span style="color:#5cd9e8">
           <img src="../assets/circle.png" alt="" style="width:0.15rem;height:0.15rem;">
        </span>
        <span class="fs-xl text mx-2" style="color:#c3cbde">需求列表</span>
      </div>
      <div class="d-flex jc-center body-box" style="margin-top: 0;">
        <div class="liBox">
          <p>有权机关（监管）类需求</p>
          <table style="width:90%;margin:auto;height:4rem;display:block;overflow-y:scroll;">
            <tr style="width:100%;display:block">
              <th width="55%">需求名称</th>
              <th width="15%">当前阶段</th>
              <th width="15%">研发中心条线</th>
              <th width="15%">业务部门</th>
            </tr>
            <vueSeamlessScroll :data="$store.state.demandlistG" class="seamless" :class-option="classOption">
                <tr v-for="(v,index) in $store.state.demandlistG" :key="index">
                  <td width="55%">{{v.reqName}}</td>
                  <td width="15%">{{v.stageOrig}}</td>
                  <td width="15%">{{v.lineName}}</td>
                  <td width="15%">{{v.lineNameOrig}}</td> 
                </tr>
            </vueSeamlessScroll>
          </table>
        </div>
       <div class="liBox">
          <p>总行重点需求</p>
          <table style="width:90%;margin:auto;height:4rem;display:block;overflow-y:scroll;">
            <tr style="width:100%;display:block">
              <th width="55%">需求名称</th>
              <th width="15%">当前阶段</th>
              <th width="15%">研发中心条线</th>
              <th width="15%">业务部门</th>
            </tr>
            <vueSeamlessScroll :data="$store.state.demandlistA" class="seamless" :class-option="classOption">
              
                <tr v-for="(v,index) in $store.state.demandlistA" :key="index">
                  <td width="55%">{{v.reqName}}</td>
                  <td width="15%">{{v.stageOrig}}</td>
                  <td width="15%">{{v.lineName}}</td>
                  <td width="15%">{{v.lineNameOrig}}</td> 
                </tr>
                
             </vueSeamlessScroll>
          </table>
        </div>
        <div class="liBox">
          <p>分支行重点需求</p>
          <table style="width:90%;margin:auto;height:4rem;display:block;overflow-y:scroll;">
            <tr style="width:100%;display:block">
              <th width="55%">需求名称</th>
              <th width="15%">当前阶段</th>
              <th width="15%">研发中心条线</th>
              <th width="15%">业务部门</th>
            </tr>
            
              <vueSeamlessScroll :data="$store.state.demandlistF" class="seamless" :class-option="classOption">  
                <tr v-for="(v,index) in $store.state.demandlistF" :key="index">
                  <td width="55%">{{v.reqName}}</td>
                  <td width="15%">{{v.stageOrig}}</td>
                  <td width="15%">{{v.lineName}}</td>
                  <td width="15%">{{v.lineNameOrig}}</td> 
                </tr>
               </vueSeamlessScroll> 
             
          </table>
        </div>
     
      </div>
    </div>
  </div>
</template>

<script>


import vueSeamlessScroll from "vue-seamless-scroll";


// const axios=require('axios');
export default {
  props: {
   
  },
  data() {
    return {
      
   
    };
  },
  components: {  vueSeamlessScroll  },
  mounted() {
    //console.log(this.$store.state.demandlistF);
  },
  computed: {
    classOption() {
      return {
        step: 0.25, // 数值越大速度滚动越快
        limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        //openWatch: false, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
    
  },
  methods: {},
  created(){


  }
};
</script>

<style lang="scss">
.seamless{
  width: 100%;
 height: calc(100% - 16px);
 overflow: hidden;
}
.liBox p{
  font-size: 0.3rem;
  font-weight:normal;
  width:100%;
  line-height: 2;
  text-align: center;
  margin:0.15rem auto;
  background:rgba(36,1,112,.2);
} 
.liBox table th{
  font-size:0.2rem;
  color:#c3cbde;
  text-align: center;
  display: inline-block;
}
.liBox table tr{
  height:0.65rem;
  font-size:0.2rem;
  text-align:center;
  width:100%;
  display: block;
}
.liBox table tr td{
  display: inline-block;
}

table::-webkit-scrollbar{
	display: none;
}

</style>