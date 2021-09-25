<template>
<div>
    <div id="bottomLeftChart2" style="width:100%;height:4.3rem;margin-top:0.3rem"></div>
</div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
    data() {
        return {
            //chart: null,
            dataCha: [],
            
            qrvNum:[],//准备上线数据
            testNum:[],//测试数据
            rdNum:[],//研发数据
            demNum:[],//需求分析数据

            qrvDate:[],//准备上线日期
            testDate:[],//测试数据日期
            rdDate:[],//研发日期
            demDate:[],//需求分析日期
            lists:[]
        };
    },
    mounted() {
        this.dataCha = JSON.parse(sessionStorage.getItem('stayLength'));
    //四条数据  
        this.qrvNum = JSON.parse(sessionStorage.getItem('qrvNum'));
        this.testNum = JSON.parse(sessionStorage.getItem('testNum'));
        this.rdNum = JSON.parse(sessionStorage.getItem('rdNum'));
        this.demNum = JSON.parse(sessionStorage.getItem('demNum'));
    //四条日期 
        this.qrvDate = JSON.parse(sessionStorage.getItem('qrvDate'));
        this.testDate = JSON.parse(sessionStorage.getItem('testDate'));
        this.rdDate = JSON.parse(sessionStorage.getItem('rdDate'));
        this.demDate = JSON.parse(sessionStorage.getItem('demDate'));
        //console.log(this.demDate);
        this.draw();
        // this.charTimg();
        //this.init();

    },
    mixins: [echartMixins],
    methods: {
        // charTimg() {
        //   const _this = this
        //   setInterval(() => {
        //     _this.draw();
        //   }, 6000);
        // },
        draw() {
            // 基于准备好的dom，初始化echarts实例

           var xdata = [...this.qrvDate, ...this.testDate, ...this.rdDate, ...this.demDate]; // 4条线x轴 日期拼接
            xdata = [...new Set(xdata)]; // x轴数据去重
            xdata = xdata.sort((a, b) => { // x轴数据排序
                return a - b
            })
            // console.log(xdata);

            //数据处理
            var listDate = [this.qrvDate, this.testDate, this.rdDate, this.demDate];
            var listNum = [this.qrvNum, this.testNum, this.rdNum, this.demNum];
            var i = 0;
            for (i in listDate) {
                var listOne = [];
                var n = 0;
                for (n in listDate[i]) {
                    listOne.push([listDate[i][n], listNum[i][n]]);
                }
                this.lists.push(listOne);
            }
        //console.log(xdata);
            let chart = this.$echarts.getInstanceByDom(document.getElementById("bottomLeftChart2"));

            if (chart === undefined) {
                chart = this.$echarts.init(document.getElementById("bottomLeftChart2"))
            }
            //  ----------------------------------------------------------------

            let option = {
                title: {
                    text: '需求数量',
                    textStyle: {
                        color: '#c3cbde',
                        fontSize: '9'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#FFF'
                        }
                    }
                },
                color: ['#d3b483', '#3995e2', '#7756e2', '#07cadd'],
                legend: {
                    icon: 'circle',
                    left: 'right',
                    itemHeight: 7,
                    itemWidth: 7,
                    data: ['需求分析', '研发', '测试', '准备上线'],
                    textStyle: {
                        color: '#FFF',
                        fontSize: '8'
                    }
                },
                grid: {

                    x: 55,
                    y: 35,
                    x2: 15,
                    y2: 35,

                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xdata,
                    axisLabel: {
                        textStyle: {
                            color: '#FFF'
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    max: '300',
                    axisLabel: {
                        textStyle: {
                            color: '#FFF'
                        }
                    }
                }],
                dataZoom: [ //滑动条
                    {
                        show: false, //是否显示滑动条
                        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                        xAxisIndex: [0],
                        filterMode: "none",
                        startValue: 0, // 从头开始。
                        endValue: 5 // 一次性展示6个。
                    }
                ],
                series: [{
                        name: '需求分析',
                        type: 'line',
                        //stack: '总量',
                        symbol: "none", // 去除小圆点
                        areaStyle: {
                            color: '#d3b483'
                        },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#d3b483' //改变折线颜色
                                }
                            }
                        },
                        data: this.lists[0], //this.dataCha['需求分析'].number
                        connectNulls: true,
                    },
                    {
                        name: '研发',
                        type: 'line',
                        //stack: '总量',
                        symbol: "none", // 去除小圆点
                        areaStyle: {
                            color: '#3995e2'
                        },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#3995e2' //改变折线颜色
                                }
                            }
                        },
                        data: this.lists[1], //this.dataCha['研发'].number
                        connectNulls: true,
                    },
                    {
                        name: '测试',
                        type: 'line',
                        //stack: '总量',
                        symbol: "none", // 去除小圆点
                        areaStyle: {
                            color: '#7756e2'
                        },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#7756e2' //改变折线颜色
                                }
                            }
                        },
                        data: this.lists[2], //this.dataCha['测试'].number
                        connectNulls: true,
                    },
                    {
                        name: '准备上线',
                        type: 'line',
                        // stack: '总量',
                        symbol: "none", // 去除小圆点
                        areaStyle: {
                            color: '#07cadd'
                        },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#7756e2' //改变折线颜色
                                }
                            }
                        },
                        data: this.lists[3], //this.dataCha['准备上线'].number
                        connectNulls: true,
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            setInterval(function () {
                // 每次向后滚动一个，最后一个从头开始。
                if (option.dataZoom[0].endValue == option.xAxis.data.length) {
                    option.dataZoom[0].endValue = 5;
                    option.dataZoom[0].startValue = 0;
                } else {
                    option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
                    option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
                }
                chart.setOption(option);
            }, 2000);

            chart.clear();
            chart.setOption(option);
            // chart.setOption(option);

        },

        destroyed() {
            window.onresize = null;
        }
    }

};
</script>

<style lang="scss" scoped>
</style>
