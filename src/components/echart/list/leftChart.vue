<template>
  <div>
    <!-- {{$store.state.businessLine}} -->
    <p class="tt">未下发需求</p>
    <div id="leftChart" style="width:100%;height:6rem;"></div>
    <p class="tt">已下发需求</p>
    <div id="leftChart2" style="width:100%;height:6.7rem;"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";
//const axios=require('axios');
export default {
  data() {
    return {
      //chart: null,
      isRe:[],
      notRe:[]
    };
  },
  mounted() {
    this.isRe=JSON.parse(sessionStorage.getItem('isRe'));
    this.notRe=JSON.parse(sessionStorage.getItem('notRe'));
    this.draw();
    this.draw2();
    // this.charTimg();
    //this.init();
  },
  mixins: [echartMixins],
  methods: {
    // charTimg() {
    //   setInterval(() => {
    //     this.draw();
    //   }, 6000);
    // },
    draw() {
      // 基于准备好的dom，初始化echarts实例
      // this.chart = this.$echarts.init(
      //   document.getElementById("leftChart")
      // );
      let chart = this.$echarts.getInstanceByDom(document.getElementById("leftChart"));
      
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("leftChart"))
      }
      //  ----------------------------------------------------------------

      let option = {
        title: {
          //text: '未下发需求',
          left:'center',
          textStyle:{
            color:'#c3cbde',
            fontSize:'9'
          }
        },
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
          data: this.notRe.businessLine,
          axisLabel: {
            textStyle: {
              color: "#FFF",
            },
          },
        },
        series: [
          {
            name: "2020年",
            type: "bar",
            data: this.notRe.counts,
            barWidth: 25,
            grid: {
          
              x:15,
              y:10,
              x2:15,
              y2:15,
            
            },
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
    draw2() {
      // 基于准备好的dom，初始化echarts实例
      //this.chart = this.$echarts.init(document.getElementById("leftChart2"));
      let chart = this.$echarts.getInstanceByDom(document.getElementById("leftChart2"));
      
      if (chart === undefined) {  
        chart = this.$echarts.init(document.getElementById("leftChart2"))
      }
      //  ----------------------------------------------------------------
     

    let option = {
        title: {
            text: '需求数量',
            left: 'left',
            textStyle: {
                color: '#c3cbde',
                fontSize:9,
              }
        },
        xAxis: {
            type: 'category',
            data: this.isRe.groupNames,
            axisLabel: {
              textStyle: {
                color: '#FFF',
                fontSize:'5'
              }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#FFF'
              }
            }
        },
        series: [{
            data: this.isRe.counts,
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
    
  },

  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
p.tt{
  text-align: center;
  font-size:0.2rem;
  color:#c3cbde;
  margin-top: 0.4rem;
}
</style>