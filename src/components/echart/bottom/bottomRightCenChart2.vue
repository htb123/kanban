<template>
  <div>
    <div id="bottomRightCenChart2" style="width:100%;height:4.7rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
export default {
  data() {
    return {
      //chart: null
      yearWeekIs:[]
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.yearIssueRequire=JSON.parse(sessionStorage.getItem('yearIssueRequire'));
    this.yearWeekIs=JSON.parse(sessionStorage.getItem('yearWeekIs'));
    this.draw();
  },
  methods: {
    draw() {
      let chart = this.$echarts.getInstanceByDom(document.getElementById("bottomRightCenChart2"));
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("bottomRightCenChart2"))
      }
      //  ----------------------------------------------------------------
      let category = this.yearWeekIs;
      let lineData = this.yearIssueRequire;
      let barData = this.yearIssueRequire;
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
              formatter: "{value} "
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
            name: "下发研发",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#8665f7"
              }
            },
            data: lineData
          },

          {
            name: "下发研发",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#8665f7" },
                  { offset: 0.2, color: "#6544ca" },
                  { offset: 1, color: "#46239e" }
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