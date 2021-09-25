<template>
  <div id="listMain">

    <!-- <dv-full-screen-container class="bg">
    
      <div class="host-body"> -->


        <!-- <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">研发中心需求可视化看板</span>
             
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div> -->

       
        <div class="body-box" style="margin-top:0.5rem;">
          <!-- 左侧数据 -->
          <div class="content-box" style="height:95vh;float:left;">
            <!-- <listLeft/> -->
            <dv-border-box-8 style="height:90vh;overflow:hidden">
              <listLeft/>
            </dv-border-box-8>
            <dv-border-box-8 style="height:90vh;overflow:hidden">
              <listRight/>
            </dv-border-box-8>
          </div>
        </div>

      <!-- </div>
    </dv-full-screen-container> -->
  </div>
</template>

<script>
import listLeft from "./listLeft";
import listRight from "./listRight";
// const axios=require('axios');
export default {
  data() {
    return {
      loading: true,
      listG:[],
      listA:[],
      listF:[],
      businessLine:[],
      counts:[],
      groupNames:[],
      counts2:[],
      
    };
  },
  components: {
    listLeft,
    listRight
  },
  mounted() {
    
  },
  methods: {
   
  },
  created(){
    // if(this.listG){
    //   this.listG=[];
    //   this.listA=[];
    //   this.listF=[],
    //   this.businessLine=[];
    //   this.counts=[];
    //   this.groupNames=[];
    //   this.counts2=[];
    // }
    // var that=this;
    // axios.post('http://10.1.95.202:9001/api/v1/qdbank/kanbanData/getAllKanBanData').then(function (response) {
        
      

    // }).catch(function (error) {
    //     console.log(error);
    // })
  }
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
#dv-full-screen-container{
  height: auto!important;
}
</style>