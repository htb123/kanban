<template>
<div id="index">
    <dv-full-screen-container class="bg">
        <!-- <dv-loading v-if="loading">Loading...</dv-loading> -->
        <div class="host-body">
            <div class="d-flex jc-center">
                <dv-decoration-10 style="width: 33.3%; height: 0.0625rem" />
                <div class="d-flex jc-center">
                    <dv-decoration-8 :color="['#568aea', '#000000']" style="width: 2.5rem; height: 0.625rem" />
                    <div class="title">
                        <span class="title-text">研发中心需求可视化看板</span>
                        <!-- <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              /> -->
                    </div>
                    <dv-decoration-8 :reverse="true" :color="['#568aea', '#000000']" style="width: 2.5rem; height: 0.625rem" />
                </div>
                <dv-decoration-10 style="width: 33.3%; height: 0.0625rem; transform: rotateY(180deg)" />
            </div>
            <!---------------------- index -------------------------->
            <div id="index1">
                <div class="body-box" id="bodyIndex1">
                    <!-- 第一行数据 -->
                    <div class="content-box">
                        <div>
                            <leftTop />
                        </div>
                        <div>
                            <dv-border-box-13>
                                <centerLeft2 />
                            </dv-border-box-13>
                        </div>
                    </div>
                    <!-- 二三行数据 -->
                    <div class="botBox">
                        <div class="leftBox" style="
                                                    width: 85%;
                                                    float: left;
                                                    height: 100vh;
                                                    margin-top: 0.3rem;
                                                  ">
                            <!-- 中间数据 -->
                            <div class="bototm-box">
                                <dv-border-box-13>
                                   <bottomLeft /> 
                                </dv-border-box-13>
                                <dv-border-box-13>
                                    <bottomRight />
                                </dv-border-box-13>
                                <dv-border-box-13>
                                    <bottomRightCen />
                                </dv-border-box-13>
                            </div>
                            <!-- 底部数据 -->
                            <div class="bototm-box" style="margin-top: 0.3rem">
                                <dv-border-box-13>
                                   <bottomLeft2 /> 
                                </dv-border-box-13>
                                <dv-border-box-13>
                                    <bottomRight2 />
                                </dv-border-box-13>
                                <dv-border-box-13>
                                    <bottomRightCen2 />
                                </dv-border-box-13>
                            </div>
                        </div>
                        <div class="rightBox" style="
                                                    width: 15%;
                                                    height: auto;
                                                    float: right;
                                                    margin-top: 0.3rem;
                                                  ">
                            <dv-border-box-8 style="height: auto">
                                <botRightBox />
                            </dv-border-box-8>
                        </div>
                    </div>
                </div>
            </div>
            <!---------------------- list -------------------------->
<!-- 
            <div id="list1">
                <div class="bodyList" id="bodyIndex2" style="width: 100%">
                    <div id="listMain">
                        <div class="body-box" style="margin-top: 0.5rem">
                           
                            <div class="content-box" style="height: 95vh; float: left">
                               
                                <dv-border-box-8 style="height: 90vh; overflow: hidden">
                                    <listLeft />
                                </dv-border-box-8>
                                <dv-border-box-8 style="height: 90vh; overflow: hidden">
                                    <listRight />
                                </dv-border-box-8>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

        </div>
    </dv-full-screen-container>
</div>
</template>

<script>
import leftTop from "./leftTop";
import centerLeft2 from "./centerLeft2";
import bottomLeft from "./bottomLeft";
import bottomLeft2 from "./bottomLeft2";
import bottomRight from "./bottomRight";
import bottomRight2 from "./bottomRight2";
import bottomRightCen from "./bottomRightCen";
import bottomRightCen2 from "./bottomRightCen2";
import botRightBox from "./botRightBox";

// import listLeft from "./listLeft";
// import listRight from "./listRight";
// import list from "./list";
const axios = require("axios");
export default {
    data() {
        return {
            timer:null,
            // list数据
            listG: [],
            listA: [],
            listF: [],
            counts: [],
            groupNames: [],
            counts2: [],

            // index数据
            showIndex: true,
            showList: false,
            //loading: true,
            requirementTotal: "", //需求总数
            onlineTotal: "", //已上线总数
            requireStageTotal: "", //需求阶段总数
            devStageTotal: "", //研发阶段总数
            testStageTotal: "", //测试阶段总数
            onlineNextWeek: "", //下周上线需求数量

            thisWeekStage: [], //存量需求当周状况-按阶段
            devLine: [], //存量需求当周状况-按研发中心条线
            businessLine: [], //存量需求当周状况-按业务部门

            pendingRequireTotal: [], //各部门需求阶段状况
            stayLength: [], //当前阶段停留时长
            yearOnline: [], //本年度每周上线需求数量
            yearWeekOn:[],//本年度每周上线需求数量 日期
            yearTest: [], //本年度每周提交测试数量
            yearWeek:[],    //本年度每周提交测试数量 日期
            yearNewRequire: [], //本年度每周新接需求数量
            yearWeekNew:[],//本年度每周新接需求数量 日期
            yearIssueRequire: [], //本年度每周下发研发数量
            yearWeekIs:[],//本年度每周下发研发数量 日期
            topTenChangeTotal: [], //本年度上线变更前十
        };
    },
    components: {
        leftTop,
        centerLeft2,
        bottomLeft,
        bottomRight,
        bottomRightCen,
        bottomLeft2,
        bottomRight2,
        bottomRightCen2,
        botRightBox,

        //list, //数据
        // listLeft,
        // listRight
    },
    mounted() {
        // this.timer=setInterval(() => {
        //     this.$nextTick(() => {
        //         setTimeout(() => {
        //             this.getEle();
        //         }, 0);
        //     });
        // }, 100000); // 这里的时间不要忘记，否则没有效果
       
    },
    methods: {

        // 跳转效果
        getEle: function () {
            var indexName = document.getElementById("index1");
            var listName = document.getElementById("list1");
            //listName.style.display = "none";
            if (indexName.style.display == "" || null == indexName.style.display) {
                indexName.style.display = "none";
                listName.style.display = "";
            } else {
                indexName.style.display = "";
                listName.style.display = "none";
            }
        },
        
        // cancelLoading() {
        //     setTimeout(() => {
        //         this.loading = false;
        //     }, 1000);
        // },

        //--------------------------router 路由跳转

        //  cancelLoading() {
        //    var _this = this;
        //     setTimeout(() => {
        //        _this.$router.replace('/list');
        //       //clearTimeout(timer);
        //     }, 5000);
        //   },

        init() {
            //list 判断空
            if (this.listG) {
                this.listG = [];
                this.listA = [];
                (this.listF = []), (this.businessLine = []);
                this.counts = [];
                this.groupNames = [];
                this.counts2 = [];
            }
            // index  判断空
            if (this.requirementTotal) {
                this.requirementTotal = ""; //需求总数
                this.onlineTotal = ""; //已上线总数
                this.requireStageTotal = ""; //需求阶段总数
                this.devStageTotal = ""; //研发阶段总数
                this.testStageTotal = ""; //测试阶段总数
                this.onlineNextWeek = ""; //下周上线需求数量

                this.thisWeekStage = []; //存量需求当周状况-按阶段
                this.devLine = []; //存量需求当周状况-按研发中心条线
                this.businessLine = []; //存量需求当周状况-按业务部门

                this.pendingRequireTotal = []; //各部门需求阶段状况
                this.stayLength = []; //当前阶段停留时长
                this.yearOnline = []; //本年度每周上线需求数量
                this.yearTest = []; //本年度每周提交测试数量
               
                this.yearNewRequire = []; //本年度每周新接需求数量
                this.yearIssueRequire = []; //本年度每周下发研发数量
                this.topTenChangeTotal = []; //本年度上线变更前十
            }
            var that = this;
            axios
                .post(
                    "http://10.1.95.202:9001/api/v1/qdbank/kanbanData/getAllKanBanData"
                )
                .then(function (response) {
                    /**********************leftTop***************************************/
                    //需求总数
                    var requirementTotal = eval(
                        "(" + response.data.requirementTotal + ")"
                    );
                    that.requirementTotal = requirementTotal;
                    sessionStorage.setItem(
                        "requirementTotal",
                        JSON.stringify(that.requirementTotal)
                    );
                    //已上线总数
                    var onlineTotal = eval("(" + response.data.onlineTotal + ")");
                    that.onlineTotal = onlineTotal;
                    sessionStorage.setItem(
                        "onlineTotal",
                        JSON.stringify(that.onlineTotal)
                    );
                    //需求阶段总数
                    var requireStageTotal = eval(
                        "(" + response.data.requireStageTotal + ")"
                    );
                    that.requireStageTotal = requireStageTotal;
                    sessionStorage.setItem(
                        "requireStageTotal",
                        JSON.stringify(that.requireStageTotal)
                    );
                    //研发阶段总数
                    var devStageTotal = eval("(" + response.data.devStageTotal + ")");
                    that.devStageTotal = devStageTotal;
                    sessionStorage.setItem(
                        "devStageTotal",
                        JSON.stringify(that.devStageTotal)
                    );

                    //测试阶段总数
                    var testStageTotal = eval("(" + response.data.testStageTotal + ")");
                    that.testStageTotal = testStageTotal;
                    sessionStorage.setItem(
                        "testStageTotal",
                        JSON.stringify(that.testStageTotal)
                    );

                    //下周上线需求数量
                    var onlineNextWeek = eval("(" + response.data.onlineNextWeek + ")");
                    that.onlineNextWeek = onlineNextWeek;

                    // that.$store.commit('demandState', {
                    //   requirementTotal:that.requirementTotal,
                    //   onlineTotal:that.onlineTotal,
                    //   requireStageTotal:that.requireStageTotal,
                    //   devStageTotal:that.devStageTotal,
                    //   testStageTotal:that.testStageTotal,
                    //   onlineNextWeek:that.onlineNextWeek
                    // });
                    sessionStorage.setItem(
                        "onlineNextWeek",
                        JSON.stringify(that.onlineNextWeek)
                    );

                    /**********************上右***************************************/
                    //存量需求当周状况-按阶段 （饼图）
                    var thisWeekStage = eval("(" + response.data.thisWeekStage + ")");
                    that.thisWeekStage = thisWeekStage;
                    //console.log(that.thisWeekStage);
                    // that.$store.commit('thisWeekStage', that.thisWeekStage);
                    sessionStorage.setItem(
                        "thisWeekStage",
                        JSON.stringify(that.thisWeekStage)
                    );

                    //存量需求当周状况-按研发中心条线 （柱状图1）
                    var devLine = eval("(" + response.data.devLine + ")");
                    that.devLine = devLine;
                    // that.$store.commit('devLine', {
                    //   groupNames:that.devLine.groupNames,
                    //   counts:that.devLine.counts,
                    // });
                    sessionStorage.setItem("devLine", JSON.stringify(that.devLine));

                    //存量需求当周状况-按业务部门 （柱状图2）
                    var businessLine = eval("(" + response.data.businessLine + ")");
                    that.businessLine = businessLine;
                    // that.$store.commit('businessLine', {
                    //   businessLine:that.businessLine.businessLine,
                    //   counts:that.businessLine.counts,

                    // });
                    sessionStorage.setItem(
                        "businessLine",
                        JSON.stringify(that.businessLine)
                    );
                    //console.log(that.thisWeekStage);

                    /**********************下左***************************************/
                    //各部门需求阶段状况
                    var pendingRequireTotal = eval(
                        "(" + response.data.pendingRequireTotal + ")"
                    );
                    that.pendingRequireTotal = pendingRequireTotal;
                    //console.log('index.vue',that.pendingRequireTotal)
                    // that.$store.dispatch('commitNotIssuedRequire', {
                    //   businessLine:that.pendingRequireTotal.businessLine,
                    //   counts:that.pendingRequireTotal.counts
                    // });
                    //that.$store.dispatch('commitNotIssuedRequire', that.pendingRequireTotal);
                    sessionStorage.setItem(
                        "pendingRequireTotal",
                        JSON.stringify(that.pendingRequireTotal)
                    );

                    //当前阶段停留时长
                    var stayLength = eval("(" + response.data.stayLength + ")");
                    that.stayLength = stayLength;
                    console.log(that.stayLength);
                // 四条数据存session
                    sessionStorage.setItem(
                        "qrvNum",
                        JSON.stringify(stayLength['准备上线'].number)
                    );
                    sessionStorage.setItem(
                        "testNum",
                        JSON.stringify(stayLength['测试'].number)
                    );
                    sessionStorage.setItem(
                        "rdNum",
                        JSON.stringify(stayLength['研发'].number)
                    );
                    sessionStorage.setItem(
                        "demNum",
                        JSON.stringify(stayLength['需求分析'].number)
                    );
                // 四条日期存session
                    sessionStorage.setItem(
                        "qrvDate",
                        JSON.stringify(stayLength['准备上线'].stopDate)
                    );
                    sessionStorage.setItem(
                        "testDate",
                        JSON.stringify(stayLength['测试'].stopDate)
                    );
                    sessionStorage.setItem(
                        "rdDate",
                        JSON.stringify(stayLength['研发'].stopDate)
                    );
                    sessionStorage.setItem(
                        "demDate",
                        JSON.stringify(stayLength['需求分析'].stopDate)
                    );

                    // that.$store.commit('stayLength', {
                    //    upOnline:that.stayLength['准备上线'].number,
                    //    test:that.stayLength['测试'].number,
                    //    resDev:that.stayLength['研发'].number,
                    //    analyse:that.stayLength['需求分析'].number,
                    // });
                    sessionStorage.setItem("stayLength", JSON.stringify(that.stayLength));
                    //console.log(that.stayLength);

                    //本年度每周提交测试数量
                    var yearTest = eval("(" + response.data.yearTest + ")");
                    that.yearTest = yearTest.value;
                    that.yearWeek=yearTest.yearweek;
                    //console.log(yearTest);
                    // that.$store.commit('yearTest',that.yearTest);
                    sessionStorage.setItem("yearTest", JSON.stringify(that.yearTest));
                    sessionStorage.setItem("yearWeek", JSON.stringify(that.yearWeek));

                    //本年度每周上线需求数量
                    var yearOnline = eval("(" + response.data.yearOnline + ")");
                    that.yearOnline = yearOnline.value;
                    that.yearWeekOn = yearOnline.yearweek;
                    // that.$store.commit('yearOnline',that.yearOnline);
                    sessionStorage.setItem("yearOnline", JSON.stringify(that.yearOnline));
                    sessionStorage.setItem("yearWeekOn", JSON.stringify(that.yearWeekOn));

                    //本年度每周新接需求数量
                    var yearNewRequire = eval("(" + response.data.yearNewRequire + ")");
                    that.yearNewRequire = yearNewRequire.value;
                    that.yearWeekNew = yearNewRequire.yearweek;
                    // that.$store.commit('yearNewRequire', that.yearNewRequire);
                    sessionStorage.setItem(
                        "yearNewRequire",
                        JSON.stringify(that.yearNewRequire)
                    );
                    sessionStorage.setItem(
                        "yearWeekNew",
                        JSON.stringify(that.yearWeekNew)
                    );
                    //本年度每周下发研发数量
                    var yearIssueRequire = eval(
                        "(" + response.data.yearIssueRequire + ")"
                    );
                    that.yearIssueRequire = yearIssueRequire.value;
                    that.yearWeekIs = yearIssueRequire.yearweek;
                    // that.$store.commit('yearIssueRequire',that.yearIssueRequire);
                    sessionStorage.setItem(
                        "yearIssueRequire",
                        JSON.stringify(that.yearIssueRequire)
                    );
                    sessionStorage.setItem(
                        "yearWeekIs",
                        JSON.stringify(that.yearWeekIs)
                    );
                    //本年度上线变更前十
                    var topTenChangeTotal = eval(
                        "(" + response.data.topTenChangeTotal + ")"
                    );
                    that.topTenChangeTotal = topTenChangeTotal;
                    // that.$store.commit('topTenChangeTotal', that.topTenChangeTotal);
                    sessionStorage.setItem(
                        "topTenChangeTotal",
                        JSON.stringify(that.topTenChangeTotal)
                    );

                    // console.log(that.yearNewRequire);

                    /********************list页数据渲染****************************/
                    //监督列表
                    var listG = eval("(" + response.data.authoritiesNotIssued + ")");
                    that.listG = listG;
                    that.$store.commit("getListG", that.listG);
                    //总行列表
                    var listA = eval("(" + response.data.headOfficeNotIssued + ")");
                    that.listA = listA;
                    that.$store.commit("getListA", that.listA);
                    //分行列表
                    var listF = eval("(" + response.data.branchNotIssued + ")");
                    that.listF = listF;
                    //console.log( that.listF);
                    that.$store.commit("getListF", that.listF);
                    //下发6个月未上线，未下发需求
                    var notRe = eval("(" + response.data.notIssuedRequire + ")");
                    that.businessLine = notRe.businessLine;
                    that.counts = notRe.counts;
                    //that.$store.commit('notIssuedRequire', {businessLine:that.businessLine,counts:that.counts});
                    sessionStorage.setItem("notRe", JSON.stringify(notRe));
                    //下发6个月未上线，已下发需求
                    var isRe = eval("(" + response.data.issuedRequire + ")");
                    that.groupNames = isRe.groupNames;
                    that.counts2 = isRe.counts;
                    //console.log(that.issuedRequire.groupNames);
                    // that.$store.commit('issuedRequire', {businessLine:that.groupNames,counts:that.counts2});
                    //console.log(that.issuedRequire.groupNames);
                    sessionStorage.setItem("isRe", JSON.stringify(isRe));

                    /******************* 分割线 ************************** */
                    // if(sessionStorage.getItem.length>0){
                        
                    //     that.loading=false;
                    // }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.init();
    },
    beforeDestroy() {
        // clearInterval(this.timer);
        // this.timer = null;
    },
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/scss/swiper.min.css";

#dv-full-screen-container {
    height: auto !important;
}

#index .host-body .body-box {
    margin-top: 0.5rem;
}
</style>
