<template>
  <div>
    <div id="bottomRightCenChart" style="width:100%;height:4.7rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
export default {
  data() {
    return {
      //chart: null
      yearWeekNew:[]
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.yearNewRequire=JSON.parse(sessionStorage.getItem('yearNewRequire'));
    this.yearWeekNew=JSON.parse(sessionStorage.getItem('yearWeekNew'));
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      //this.chart = this.$echarts.init(document.getElementById("bottomRightCenChart"));
      let chart = this.$echarts.getInstanceByDom(document.getElementById("bottomRightCenChart"));
      
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("bottomRightCenChart"))
      }
      //  ----------------------------------------------------------------
      let category = this.yearWeekNew;
      let lineData = this.yearNewRequire;
      let barData = this.yearNewRequire;
      let rateData = [];
      for (let i = 0; i < 33; i++) {
        let rate = barData[i] / lineData[i];
        rateData[i] = rate.toFixed(2);
      }

      let option = {
        title: {
          text: "",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        grid: {
          x:30,
          y:25,
          x2:30,
          y2:35,
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              //formatter: "{value} "
            }
          }
        ],
        dataZoom: [//滑动条
          {
              show: false,//是否显示滑动条
              type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
              xAxisIndex: [0],
              filterMode :"none",
              startValue: 0, // 从头开始。
              endValue: 4  // 一次性展示6个。
          }
        ],
        series: [
          {
            name: "新接需求",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#01f4f6"
              }
            },
            data: lineData
          },

          {
            name: "新接需求",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#01f4f6" },
                  { offset: 0.2, color: "#0dbee0" },
                  { offset: 1, color: "#2155b2" }
                ])
              }
            },
            z: -12,

            data: barData
          }
        ]
      };


      // 使用刚指定的配置项和数据显示图表。
        setInterval(function () {
            // 每次向后滚动一个，最后一个从头开始。
            if (option.dataZoom[0].endValue == category.length ) {
                option.dataZoom[0].endValue = 5; 
                option.dataZoom[0].startValue = 0;
            }
            else {
                option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
                option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
            }
            chart.setOption(option);
        }, 2000);


      chart.clear();
      chart.setOption(option);
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>