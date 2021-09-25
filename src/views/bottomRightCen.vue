<template>
  <div id="bottomRightCen">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
         <img src="../assets/circle.png" alt="" style="width:0.15rem;height:0.15rem;">
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">本年度每周新接需求数量</span>
        </div>
      </div>
      <div>
        <bottomRightCenChart />
      </div>
    </div>
  </div>
</template>

<script>
import bottomRightCenChart from "@/components/echart/bottom/bottomRightCenChart";
export default {
  data() {
    return {};
  },
  components: {
    bottomRightCenChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomRightCen {
  padding: 0.3rem 0.2rem;
  height: 4.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    // height: 6.0625rem;
    // border-radius: 0.125rem;
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
}
</style>