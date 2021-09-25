<template>
  <div>
    
    <div id="bottomLeftChart" style="width:100%;height:4.5rem;"></div>
    
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
// import{ mapState} from "vuex"

export default {
  data() {
    return {
      //chart: null,
      businessLineData: [],
      countsData: [],
      dataChart:[]
    };
  },
  created () {
   
  },
  mounted() {
    this.dataChart=JSON.parse(sessionStorage.getItem('pendingRequireTotal'));
    this.draw();
    
  },
  mixins: [echartMixins],
  methods: {
    draw() {
      let chart = this.$echarts.getInstanceByDom(document.getElementById("bottomLeftChart"));
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("bottomLeftChart"))
      }
      //  ----------------------------------------------------------------

      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          
          x:45,
          y:20,
          x2:15,
          y2:35,
        
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            textStyle: {
              color: "#FFF",
            },
          },
        },
        yAxis: {
          type: "category",
          data: this.dataChart.businessLine,
          axisLabel: {
            textStyle: {
              color: "#FFF",
              fontSize:10
            },
          },
        },
        series: [
          {
            name: "2020年",
            type: "bar",
            data: this.dataChart.counts,
            barWidth: 15,
            itemStyle: {
              //barBorderRadius: [0, 5, 5, 0],
              normal: {
                barBorderRadius: [0, 5, 5, 0],
                color:new this.$echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                        {offset: 0, color: '#1ea0ff'},                   //柱图渐变色
                        {offset: 0.5, color: '#1ea0ff'},                 //柱图渐变色
                        {offset: 1, color: '#475cff'},                   //柱图渐变色
                    ]
                )
              }
            },
          },
        ],
      };
      chart.clear();
      chart.setOption(option);
    },
    
  },
  destroyed() {
    window.onresize = null;
  },
};
</script>

<style lang="scss" scoped>
</style>