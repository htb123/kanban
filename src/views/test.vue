<template>
 <div>
     1111111111111111111111111111111111111111
    <div class="box">
    <ul class="ullist" @mouseleave="clearTimeout" @mouseenter="beginTimeout">
    <li><img src="@/assets/bg.png" alt="" class="Liwidth"></li>
    <li><img src="@/assets/pageBg.png" alt=""></li>
    </ul>
    </div>
 </div>
</template>
<script>
export default {
 data(){
 return{
  screenWidth:'',
  boxWidth:0,
  isClear:0,
  timer:null,
  left:0,
  timerRun:false,
 }
 },
 methods:{
  //获取窗口的宽度
 getListLeng(){
  this.boxWidth = document.getElementsByClassName('box')[0].offsetWidth
  var ul = document.getElementsByClassName('ullist')[0]
  var length = ul.children.length
  ul.style.width=length*230+'px'
  this.runTimeout(ul,this.boxWidth,length)
 },
 //轮播效果
 runTimeout(ul,boxWidth,length){
  let that = this
  this.timer=setInterval(function(){
  // move();
  
  that.move(ul,boxWidth,length)
  },50) 
 },
 //轮播图走的方法
 move(ul,boxWidth,length){
  var num = this.left--
  var allWidth =length*230-boxWidth
  if(Math.abs(num)>allWidth){
  ul.style.left=0+'px'
  this.left=0
  }
  ul.style.left=num+'px'
 },
 //移入
 beginTimeout(){
  clearInterval(this.timer)
 },
 //移出
 clearTimeout(){
  clearInterval(this.timer)
  this.timer = null
  this.boxWidth = document.getElementsByClassName('box')[0].offsetWidth
  let ul = document.getElementsByClassName('ullist')[0]
  let length = ul.children.length
  ul.style.width=length*230+'px'
  this.runTimeout(ul,this.boxWidth,length)
 } 
 },
 mounted(){
 this.getListLeng()
 window.onresize = () => {
  return (() => {
  this.boxWidth = document.getElementsByClassName('box')[0].offsetWidth
  })()
 },
 getSwiperList().then(res=>{
  this.bannerList = res.data
 })
 },
 //页面销毁的时候 关闭定时器
 destroyed () {
 clearInterval(this.timer)
 }
}
</script>
<style lang="scss" scped>
 .box{
 height:230px;
 width:80%;
 margin: 200px auto;
 position: relative;
 overflow: hidden;
 ul{
  position: absolute;
 }
 li{
  float: left;
  height:230px;
  width:230px;
  img{
  height:230px;
  width:230px;
  }
 }
 }
</style>