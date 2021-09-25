<template>
  <div id="center">
    <dv-border-box-8>
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <img src="../assets/circle.png" alt style="width:0.15rem;height:0.15rem;" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">年度需求状况</span>
        </div>
      </div>
      <div class="up">
        <ul>
          <li>
            <h3>{{requirementTotal}}</h3>
            <p>需求总数</p>
          </li>
          <li>
            <h3>{{onlineTotal}}</h3>
            <p>已上线总数</p>
          </li>
          <li>
            <h3>{{requireStageTotal}}</h3>
            <p>需求阶段总数</p>
          </li>
          <li>
            <h3>{{devStageTotal}}</h3>
            <p>研发阶段总数</p>
          </li>
          <li>
            <h3>{{testStageTotal}}</h3>
            <p>测试阶段总数</p>
          </li>
        </ul>
        <!-- <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        
        <div>
          <dv-digital-flop :config="item.number" style="width:1.25rem;height:.625rem;margin:auto" />
        </div>
        <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
        </div>-->
      </div>
    </dv-border-box-8>
    <dv-border-box-8 :reverse="true">
      <div class="down">
          <div class="percent">
            <div class="d-flex pt-2 pl-2" style="margin:0;">
              <span style="color:#5cd9e8">
                <!-- <img src="../assets/icon.jpg" alt="" style="width:0.5rem;height:0.45rem;"> -->
              </span>
              <div class="d-flex" style="height:1.35rem;line-height:1.35rem">
                <span class="fs-xl text mx-2" style="font-size:20px;width:170px">下周上线需求数量</span>
                <span style="font-size:0.7rem;color:#FFE188;margin-left:10px">{{onlineNextWeek}}</span>
              </div>
            </div>
          </div>
      </div>
    </dv-border-box-8>
  </div>
</template>

<script>
// import centerChart from "@/components/echart/center/centerChartRate";

export default {
  data() {
    return {
      onlineNextWeek: '', //下周上线需求数量
      requirementTotal: '', //需求总数
      onlineTotal: '', //已上线总数
      requireStageTotal: '', //需求阶段总数
      devStageTotal: '', //研发阶段总数
      testStageTotal: '', //测试阶段总数
      
    };
  },
  mounted () {
    this.onlineNextWeek=JSON.parse(sessionStorage.getItem('onlineNextWeek'));
    this.requirementTotal=JSON.parse(sessionStorage.getItem('requirementTotal'));
    this.onlineTotal=JSON.parse(sessionStorage.getItem('onlineTotal'));
    this.requireStageTotal=JSON.parse(sessionStorage.getItem('requireStageTotal'));
    this.devStageTotal=JSON.parse(sessionStorage.getItem('devStageTotal'));
    this.testStageTotal=JSON.parse(sessionStorage.getItem('testStageTotal'));
    // formatter (number) {
    //   const numbers = number.toString().split('').reverse();
    //   const segs = [];

    //   while (numbers.length) segs.push(numbers.splice(0, 3).join(''));

    //   return segs.join(',').split('').reverse().join('');
    // }

    // thousandSeparator(num) {
    //   return (
    //     num &&
    //     (num.toString().indexOf(".") != -1
    //       ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
    //           return $2 + ",";
    //         })
    //       : num.toString().replace(/(\d)(?=(\d{3})+\b)/g, function ($1, $2) {
    //           return $2 + ",";
    //         }))
    //   );
    // },
  },
  methods:{
    
  },
  created () {
    
    
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#center .text{
  color:#c3cbde;
}
.pl-2 {
  width: 92%;
  margin-left: 10px;
  margin-top: 7px;
}
.up ul {
  width: 96%;
}
.up ul li {
  background-color: rgba(9, 59, 166, 0.1);
  border-radius: 0.0625rem;
  width: 47%;
  text-align: center;
  float: left;
  height: 1.4rem;
  margin-bottom: 0.3rem;
  overflow: hidden;
}
.up ul li:first-child + li {
  float: right;
}
.up ul li:first-child + li + li,
.up ul li:first-child + li + li + li,
.up ul li:first-child + li + li + li + li {
  width: 33%;
}
.up ul li h3 {
  color: #63d1ff;
  font-size: 0.7rem;
  margin: 0.3rem 0 0.2rem 0;
}
.up ul li p {
  color: #c3cbde;
  font-size: 0.07rem;
}
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 92%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
   
  }

  .down {
    
    width: 100%;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 59%;
    }
    .percent {
      width: 90%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>