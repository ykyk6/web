<template>
    <!-- 第二段 -->
    <div class="startbox2 q-pt-md">
        <div class="bigbg3"></div>
        <!--  -->
        <div class="container">
          <div class="abouttextbox">
          <div class="aboutframe"></div>
          <div class="abouttextboxoutside">
            <div class="abouttext">
               茶道とは、決められた伝統的作法に則って抹茶を点て、客人にふるまう行為です。粉状の抹茶と湯を茶碗に入れ、竹でできた茶筅で撹拌して点てます。
        単にお茶を楽しむだけではなく、客人をもてなす点前作法、庭や茶室などの空間、茶道具などの工芸品、懐石料理や和菓子など、あらゆる芸術要素が備わっていて、日本文化の中でも特に高い人気を得ています。
            </div></div>
          </div>
        </div>
        <!--  -->
        <div class="container2">
          <div class="abouttextbox">
          <div class="aboutframe2"></div>
          <div class="abouttextboxoutside2">
            <div class="abouttext">
               お茶が日本に広まったのは鎌倉時代の頃、栄西という僧が、中国の宋から茶を日本に持ち帰ったのが始まりとされています。室町時代には、僧侶の村田珠光が禅の精神性を取り入れ、小さく簡素な茶室と落ち着いた雰囲気の「侘茶」を始めます。これを現在のような日本文化としての茶道の原型へと発展させたのが、茶人として有名な「千利休」です。
            </div></div>
          </div>
          <!--  -->
        </div>
        <!--  -->
        <!-- <div class="container2">
          </div> -->
          <!--  -->
          <div class="uepic"></div>
        </div>
        <!--  -->
</template>
<script>
export default {
  data () {
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap');
   .startbox2{
        font-family: "Noto Sans JP";
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* margin-top: 8%; */
        position: relative;
        padding-top: 230px;
      }
        .uepic{
        width: 200px;
        height: 280px;
        position: absolute;
        right: 0;
        top: 86%;
        z-index: 99;
        transform: rotate(3deg);
      }
     .bg-grey{
        width: 100%;
        z-index: -1;
      }
      .bigbg3{
        width: 120%;
        height: 1300px;
        position: absolute;
        left: -5%;
        top: 3%;
        z-index: -1;
        background-image: url(~@/assets/bg-white.png);
        background-attachment: fixed;
      }
     .container{
       width: 80%;
       /* height: 400px; */
       /* background: aqua; */
       display: flex;
       flex-direction: row;
       justify-content: flex-end;
       /* margin-top: 80px; */
     }
    .aboutframe{
      width: 370px;
      height: 470px;
      position: absolute;
      left: -36%;
      top: -10%;
      background-image: url(~@/assets/whatisframe.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
    .aboutframe::after{
      width: 53%;
      height: 280px;
      content: "";
      position: absolute;
      left: 55%;
      top: 33.5%;
       background-image: url(~@/assets/rabbit2.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
    .abouttextboxoutside,.abouttextboxoutside2{
      background: rgba(209, 209, 209, 0.5);
      /* filter:opacity(0.7); */
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .abouttextbox{
      width: 60%;
      padding-top: 6%;
      padding-bottom: 6%;
      position: relative;
    }
    .abouttext{
    font-size: 16px;
    color:black;
    text-align: left;
    line-height: 2;
    letter-spacing: 2px;
    width: 75%;
    margin-left: 15%;
    }
    .abouttextboxoutside::after{
        content:"ABOUT";
        font-family: 'Caveat', cursive;
        width: 28%;
        height: 80px;
        position: absolute;
        left: -0%;
        top: 0px;
        font-size: 43px;
        line-height: 1.7;
        font-weight: 600;
        color: black;
        text-align-last: center;
        z-index: -1;
      }
       .abouttextboxoutside2::after{
        content:"HISTORY";
        font-family: 'Caveat', cursive;
        width: 28%;
        height: 80px;
        position: absolute;
        right: 8%;
        top: 0px;
        font-size: 43px;
        line-height: 1.7;
        font-weight: 600;
        color: black;
        text-align-last: center;
        z-index: -1;
      }
      .container2{
       width: 80%;
       display: flex;
       flex-direction: row;
       justify-content: flex-start;
       margin-top: 100px;
       margin-bottom: 80px;
     }
      .aboutframe2{
      width: 370px;
      height: 470px;
      position: absolute;
      left: 94%;
      top: -10%;
      background-image: url(~@/assets/whatisframe.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
     .aboutframe2::after{
      width: 70%;
      height: 230px;
      content: "";
      position: absolute;
      left: 50%;
      top: 34%;
      transform: translate(-50%,0);
      background-image: url(~@/assets/rabbit4.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
     .aboutframe2::before{
      width: 29%;
      height: 180px;
      content: "";
      position: absolute;
      left: 50%;
      top: 5%;
      transform: translate(-50%,0);
      background-image: url(~@/assets/light2.png);
      background-size: contain;
      background-repeat: no-repeat;
      /* background: rgba(233, 107, 107,0.3); */
    }
    .aboutframe::before{
      width: 70%;
      height: 320px;
      content: "";
      position: absolute;
      left: -8%;
      top: -1%;
      transform: rotate(-20deg);
       background-image: url(~@/assets/hanashi2.png);
       filter: opacity(0.8);
      background-size: contain;
      background-repeat: no-repeat;
    }
     .bigbg4{
        width: 100%;
        height: 1000px;
        position: absolute;
        left: 0%;
        top: 0%;
        transform: rotate(-3deg);
        z-index: 1;
      }
      @media screen and (min-width: 1200px) and (max-width: 1500px){
        .aboutframe{
      left: -52%;
         }
      }
      @media screen and (min-width: 1501px) and (max-width: 1650px){
        .aboutframe{
      left: -44%;
         }
      }
</style>
