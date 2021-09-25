import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
    //存放的键值对就是所要管理的状态
    name:'helloVuex',
    list:'我是测试啊测试',
    /******************* 列表页 *****************************/ 
    demandlistG: [],//监管列表
    demandlistA: [],//总行列表
    demandlistF: [],//分行列表
    //下发6个月未上线，未下发需求
    notIssuedRequire:{
      businessLine:[],
      counts:[]
    },
    //下发6个月未上线，已下发需求
    issuedRequire:{
      groupNames:[],
      counts:[]
    },
    /******************* 图表页 *****************************/ 
    //年度需求状况
    demandState:{
      requirementTotal:'',
      onlineTotal:'',
      requireStageTotal:'',
      devStageTotal:'',
      testStageTotal:'',
      onlineNextWeek:''
    },
    /*--------------存量需求当周状况*-------------*/
    //按阶段-饼状图
    thisWeekStage:[],
    //按研发中心条线-柱状图
    devLine:{
      groupNames:'',
      counts:''
    },
    //按业务部门-柱状图
    businessLine:{
      businessLine: [],
      counts: []
    },
    //各部门需求阶段状况
    pendingRequireTotal:{
      businessLine:'',
      counts:''
    },
    //当前阶段停留时长
    stayLength:{
      upOnline:[],
      test:[],
      resDev:[],
      analyse:[],
    },
    //本年度每周上线需求数量
    yearOnline:[],
    //本年度每周提交测试数量
    yearTest:[],
    //本年度每周新接需求数量
    yearNewRequire:[],
    //本年度每周下发研发数量
    yearIssueRequire:[],
    //本年度上线变更前十
    topTenChangeTotal:{

    }
  },
  mutations: {
    useYap (state, data) {
      state.name = data
    },
    //监管列表
    getListG (state, data) {
      state.demandlistG = data
    },
    //总行列表
    getListA (state, data) {
      state.demandlistA = data
    },
    //分行列表
    getListF (state, data) {
      state.demandlistF = data
    },
    //下发6个月未上线，未下发需求
    notIssuedRequire(state, data){
      state.notIssuedRequire.businessLine = data.businessLine;
      state.notIssuedRequire.counts = data.counts;
    },
    //下发6个月未上线，已下发需求
    issuedRequire(state, data){
      state.issuedRequire.counts=data.counts;
      state.issuedRequire.groupNames=data.groupNames;
    },
/*****************************图表页****************************** */
    //年度需求状况
    demandState(state,data){
      state.demandState.requirementTotal=data.requirementTotal;
      state.demandState.onlineTotal=data.onlineTotal;
      state.demandState.requireStageTotal=data.requireStageTotal;
      state.demandState.devStageTotal=data.devStageTotal;
      state.demandState.testStageTotal=data.testStageTotal;
      state.demandState.onlineNextWeek=data.onlineNextWeek;
    },
  /*--------------存量需求当周状况*-------------*/
    //按阶段-饼状图
    thisWeekStage(state,data){
      state.thisWeekStage=data;
    },
    //按研发中心条线-柱状图
    devLine(state,data){
      state.devLine.groupNames=data.groupNames;
      state.devLine.counts=data.counts;
    },
    //按业务部门-柱状图
    businessLine(state,data){
      state.businessLine.businessLine=data.businessLine;
      state.businessLine.counts=data.counts;
    },
    //各部门需求阶段状况
    pendingRequireTotal(state,data){
      state.pendingRequireTotal.businessLine=data.businessLine;
      state.pendingRequireTotal.counts=data.counts;
      state.isShow=true;
    },
    //当前阶段停留时长
    stayLength(state,data){
      state.stayLength.upOnline=data.upOnline;
      state.stayLength.test=data.test;
      state.stayLength.resDev=data.resDev;
      state.stayLength.analyse=data.analyse;
    },
    //本年度每周上线需求数量
    yearOnline(state,data){
      state.yearOnline = data
    },
    //本年度每周提交测试数量
    yearTest(state,data){
      state.yearTest = data
    },
    //本年度每周新接需求数量
    yearNewRequire(state,data){
      state.yearNewRequire = data
    },
    //本年度每周下发研发数量
    yearIssueRequire(state,data){
      state.yearIssueRequire = data
    },
    //本年度上线变更前十
    topTenChangeTotal(state,data){
      state.topTenChangeTotal = data
    } 
  },
  actions: {
    commitNotIssuedRequire (context, data) {
      context.commit('notIssuedRequire', data)
    }
  },
  modules: {
  }
})
