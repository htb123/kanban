<template>
  <div style="width:100%">
    <!-- <div>{{$store.state.thisWeekStage}}</div> -->
    <div id="centreLeft2Chart" style="width:26%;height:4.5rem;float:left"></div>
    <div id="centreLeft3Chart" style="width:40%;height:5.3rem;float:left"></div>
    <div id="centreLeft4Chart" style="width:33%;height:5.3rem;float:left"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  data() {
    return {
      //chart: null,
      thisWeekStage:[],
      devLine:[],
      businessLine:[]
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.thisWeekStage=JSON.parse(sessionStorage.getItem('thisWeekStage'));
    this.draw();
    this.devLine=JSON.parse(sessionStorage.getItem('devLine'));
    this.draw2();
    this.businessLine=JSON.parse(sessionStorage.getItem('businessLine'));
    this.draw3();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
     // this.chart = this.$echarts.init(document.getElementById("centreLeft2Chart"));
      let chart = this.$echarts.getInstanceByDom(document.getElementById("centreLeft2Chart"));
      
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("centreLeft2Chart"))
      }
      //  ----------------------------------------------------------------

      let option = {
          title: {
              text: '按阶段',
              left: 'center',
              textStyle: {
                 fontSize:14,
                color:'#c3cbde',
            }
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          color : [ '#3ebaff', '#ffe188', '#00fdf9', '#8c6bff'],
          legend: {
              icon: 'circle',
              left: 'center',
              top: '82%',
              itemHeight: 7,
              itemWidth: 7,
              data: ['需求分析', '研发', '测试', '准备上线'],
              textStyle:{//图例文字的样式
                  color:'#FFF',
                  fontSize:10
              }
          },
          series: [
              {
                  name: '半径模式',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '50%'],
                  label: {
                      show: false
                  },
                  emphasis: {
                      label: {
                          show: true
                      }
                  },
                  data: this.thisWeekStage//this.$store.state.thisWeekStage
                  
              }
          ]
      };
      chart.clear();
      chart.setOption(option);
    },
    draw2() {
      // 基于准备好的dom，初始化echarts实例
      //this.chart = this.$echarts.init(document.getElementById("centreLeft3Chart"));
      let chart = this.$echarts.getInstanceByDom(document.getElementById("centreLeft3Chart"));
     
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("centreLeft3Chart"))
      }
      //  ----------------------------------------------------------------
     

    let option = {
        title: {
            text: '按研发中心条线',
            left: 'center',
            textStyle: {
                color: '#c3cbde',
                fontSize:14,
              }
        },
        xAxis: {
            type: 'category',
            data: this.devLine.groupNames,
            axisLabel: {
              textStyle: {
                color: '#FFF',
                fontSize:5
              }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#FFF',
                fontSize:9
              }
            }
        },
        series: [{
            data: this.devLine.counts,
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color:new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#ffe188'},                   //柱图渐变色
                        {offset: 0.5, color: '#ffe188'},                 //柱图渐变色
                        {offset: 1, color: '#7d539d'},                   //柱图渐变色
                    ]
                )
              }
            },
        }]
      };
      chart.clear();
      chart.setOption(option);
    },
    draw3() {
      // 基于准备好的dom，初始化echarts实例
      //this.chart = this.$echarts.init(document.getElementById("centreLeft4Chart"));
      let chart = this.$echarts.getInstanceByDom(document.getElementById("centreLeft4Chart"));
      
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("centreLeft4Chart"))
      }
      //  ----------------------------------------------------------------
     

    let option = {
        title: {
            text: '按业务部门',
            left: 'center',
            textStyle: {
                color: '#c3cbde',
                fontSize:14,
              }
        },
        xAxis: {
            type: 'category',
            data: this.businessLine.businessLine,
            axisLabel: {
              textStyle: {
                color: '#FFF',
                fontSize:7
              }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#FFF',
                fontSize:9
              }
            }
        },
        series: [{
            data: this.businessLine.counts,
            type: 'bar',
            barWidth: 25,
            itemStyle: {
              //barBorderRadius: [5, 5, 0, 0],
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color:new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#1ea0ff'},                   //柱图渐变色
                        {offset: 0.5, color: '#1ea0ff'},                 //柱图渐变色
                        {offset: 1, color: '#475cff'},                   //柱图渐变色
                    ]
                )
              }
            }
        }]
      };
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