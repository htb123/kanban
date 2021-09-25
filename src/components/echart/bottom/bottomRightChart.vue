<template>
  <div>
    <div id="bottomRightChart" style="width:100%;height:5rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
export default {
  data() {
    return {
      //chart: null,
      yearTest:[],
      yearWeek:[],
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.yearTest=JSON.parse(sessionStorage.getItem('yearTest'));
    this.yearWeek=JSON.parse(sessionStorage.getItem('yearWeek'));
    this.draw();
  },
  methods: {
    draw() {
    let chart = this.$echarts.getInstanceByDom(document.getElementById("bottomRightChart"));
     if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("bottomRightChart"))
      }
      //  ----------------------------------------------------------------
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.yearWeek,
          axisLabel: {
            textStyle: {
              color: '#FFF'
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: '#FFF'
            }
          }
        },
        grid:{
          x:45,
          y:20,
          x2:15,
          y2:55,
        },
        dataZoom: [//滑动条
          {
              show: false,//是否显示滑动条
              type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
              xAxisIndex: [0],
              filterMode :"none",
              startValue: 0, // 从头开始。
              endValue: 5  // 一次性展示6个。
          }
        ],
        series: [
          {
            data: this.yearTest,
            type: "line",
            symbol: "none", // 去除小圆点
            areaStyle: {
              
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color:new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                 {
                    offset: 0, color: '#5695e6' // 0% 处的颜色
                  }, {
                      offset: 0.4, color: '#558ce2' // 100% 处的颜色
                  }, {
                      offset: 1, color: '#4023b8' // 100% 处的颜色
                  }
                ]),
             
            }, //区域颜色渐变
            itemStyle: {
              normal: {
                color: '#5695e6', //改变折线点的颜色
                lineStyle: {
                  color: '#5695e6' //改变折线颜色
                }
              }
            },
          },
        ],
      };


      // 使用刚指定的配置项和数据显示图表。
        setInterval(function () {
            // 每次向后滚动一个，最后一个从头开始。
            if (option.dataZoom[0].endValue == option.xAxis.data.length ) {
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
    },
  },
  destroyed() {
    window.onresize = null;
  },
};
</script>

<style lang="scss" scoped>
</style>