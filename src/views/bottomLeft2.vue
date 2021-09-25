<template>
  <div id="bottomRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <img src="../assets/circle.png" alt="" style="width:0.15rem;height:0.15rem;">
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">当前阶段停留时长</span>
          <!-- <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:480px;" />
          </div> -->
        </div>
      </div>
      <div>
        <bottomLeftChart2 />
      </div>
    </div>
  </div>
</template>

<script>
import bottomLeftChart2 from "@/components/echart/bottom/bottomLeftChart2";
export default {
  data() {
    return {};
  },
  components: {
    bottomLeftChart2
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomRight2 {
  padding: 0.2rem 0.2rem 0;
  height: 5.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    // height: 6.1875rem;
    // border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  } //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>