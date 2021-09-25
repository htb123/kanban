<template>
  <div id="listLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2 heightTop" style="heigth:5%">
        <span style="color:#5cd9e8">
          <!--  -->
          <img src="../assets/circle.png" alt="" style="width:0.15rem;height:0.15rem;">
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">下发6个月未上线需求</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box heightBot" style="heigth:95%">
        <leftChart/>
      </div>
    </div>
  </div>
</template>

<script>

import leftChart from "@/components/echart/list/leftChart";
export default {
  data() {
    return {
      
    };
  },
  components: {
    leftChart
  },
  mounted() {},
  methods: {},
  
};
</script>

<style lang="scss">
#listLeft {
  padding: 0.2rem;
  height: 100%;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 100%;
    border-radius: 0.125rem;
  }
  .heightTop{
    height:5%;
  }
  .heightBot{
    height:95%;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>