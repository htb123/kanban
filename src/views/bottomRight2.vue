<template>
  <div id="bottomLeft2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
         <img src="../assets/circle.png" alt="" style="width:0.15rem;height:0.15rem;">
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">本年度每周上线需求数量</span>
        </div>
      </div>
      <div>
        <bottomRightChart2 />
      </div>
    </div>
  </div>
</template>

<script>
import bottomRightChart2 from "@/components/echart/bottom/bottomRightChart2";
export default {
  data() {
    return {};
  },
  components: {
    bottomRightChart2
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomLeft2 {
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