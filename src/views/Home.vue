<template>
  <div class="home w-100" id="top">
    <div class="macchabox"><img src="@/assets/macchamaccha.png" class="pich100"></div>
    <!-- 頁首輪播圖 -->
    <q-carousel
      animated
      v-model="slide"
      navigation
      navigation-icon="stop"
      infinite
      :autoplay="autoplay"
      control-color="white"
      swipeable
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="680px"
      content-class="abc"
      class=""
      style="z-index:-10 carouselstyle;"
    >
      <q-carousel-slide :name="1" img-src="https://haa.athuman.com/media/japanese/wp-content/uploads/sites/4/2020/07/mains-1.jpg" />
      <q-carousel-slide :name="2" img-src="https://haa.athuman.com/media/japanese/wp-content/uploads/sites/4/2020/07/sub_3-5.jpeg" />
      <q-carousel-slide :name="3" img-src="https://discoverlocal.site/wp-content/uploads/2020/06/shutterstock_244203049.jpg" />
      <q-carousel-slide :name="4" img-src="https://free-materials.com/adm/wp-content/uploads/2020/01/adpDSC_2732-1024x683.jpg" />
    </q-carousel>
    <!-- manager -->
    <div class="startbox q-mr-xs q-pb-xl">
    <div class="blackbox"></div>
      <div class="bigbg2"><img src="~@/assets/bg-grey.png" class="bg-grey "></div>
       <div class="mactchatext"><div class="mactchatext2" data-aos="fade-up" data-aos-duration="1000">Maccha</div></div>
       <!--  -->
      <div class="say q-ml-xs row items-center justify-center"><div class="q-mt-sm say1text">茶道とは、一言で言ってしまうと、</div></div>
      <div class="box1"><div class="box1-1"></div></div>
      <div class="box2"><div class="box1right"><div class="q-mt-sm say2text text-back">静かに抹茶を点てて味わうことを通して、自然と調和し、人と物を敬う態度を学ぶことです。</div></div></div>
     </div>
     <!-- 第二段 -->
     <ABOUT/>
     <!-- 第三段 -->
     <howto/>
     <!-- 第四段 -->
      <startbox4/>
      <!-- 第五段 -->
      <footer0/>
      <!-- <startbox5/> -->
</div>
</template>
<script>
import ABOUT from '../components/style/ABOUT.vue'
import howto from '../components/style/howto.vue'
import startbox4 from '../components/style/startbox4.vue'
import footer0 from '../components/style/footer.vue'
export default {
  components: { ABOUT, howto, startbox4, footer0 },
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  },
  mounted () {
  }
}
</script>
      <style scoped>
      @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap');
      .managerappearbtn{
        width: 100px;
        height: 40px;
        background: black;
        position: fixed;
        top:0px;
        right: 0%;
      }
      .home{
        font-family: "Noto Sans JP","Noto Sans CJK JP","Noto Sans Japanese","Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","ヒラギノ角ゴシック","Hiragino Sans","メイリオ","ＭＳ Ｐゴシック","MS PGothic",sans-serif;
        letter-spacing: 2px;
      }
      .bigbg{
        width: 100vw;
        height: 1000px;
        background: rgb(253, 253, 253);
        position: absolute;
        left: -8%;
        top: -3%;
        z-index: -25;
      }
      .bigbg-2{
        width: 300px;
        height: 200px;
        position: absolute;
        left: -5%;
        top: 90%;
        z-index: 10;
        transform: rotate(10deg);
      }
      .bigbg-2-img{
        height: 100%;
        filter: opacity(0.6);
      }
      .bigbg2{
        width:100%;
        height: 1000px;
        background-size: auto;
        /* transform: rotate(-3deg); */
        position: absolute;
        left: 0%;
        top: -30%;
        z-index: -9;
        padding-top: 80px;
      }
      .bigbg3{
       width: 100%;
      height: 1000px;
      position: absolute;
      left: 0%;
      top: 2%;
      margin-top: 5%;
}
      .bg-grey{
        width: 100%;
      }
      .mactchatext{
        width: 50%;
        height: 200px;
        position: absolute;
        top: -18%;
        right: 0;
        transform:rotate(-8deg);
        z-index: 22;
        }
        .mactchatext2{
          font-size: 200px;
          font-family: 'Caveat', cursive;
          color: rgba(228, 173, 21, 0.8);
        }
      .w-100{
        width: 100vw;
      }
      .h-100{
      height: 100vh;
      }
      .pich100{
        height: 100%;
      }
      .picw100{
        width: 100%;
        height: 100%;
      }
      .macchabox{
        width: 400px;
        height: 70px;
        border: 2px solid black;
        background: white;
        position: absolute;
        left: 50%;
        margin-top: 0px;
        transform: translate(-50%,0);
        z-index: 100;
      }
      .say{
        font-family: "Noto Sans JP";
        width: 7%;
        height: 320px;
        position: absolute;
        margin-top: 270px;
        margin-left: 63%;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        background: rgba(252, 252, 252, 0.5);
        color: rgb(0, 0, 0);
        font-size: 16px;
        font-weight: 400;
        z-index: 5;
      }
      .box1right{
        width: 30%;
        height: 370px;
        display: flex;
        align-items: center;
        margin-top: 120px;
        background: rgba(255, 255, 255, 0.5);
        margin-right: 17%;
        font-size: 16px;
        font-weight: 400;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
       position: relative;
       left: 52%;
       top: 9%;
       transform: translate(-60%, 0);
      }
      .say1text{
        color: rgb(0, 0, 0);
        z-index: 5;
        line-height: 2;
      }
      .say2text{
        height: 90%;
        margin-top: 5%;
        line-height: 2;
        color: rgb(0, 0, 0);
        text-align: left;
        z-index: 5;
      }
      .box1right::after{
        content: "";
        background-image: url(~@/assets/rabbit1.png);
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 70%;
        position: absolute;
        left: 83%;
        top: 50%;
      }
      .startbox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 80px;
        position: relative;
        z-index: -2;
      }
      .box1{
        width: 52%;
        height: 400px;
        border: 1.5px solid rgb(129, 129, 129);
        margin-top: 170px;
        margin-left: 10%;
        background-image: url(~@/assets/ochapic.jpg);
        background-size: contain;
        background-position: left;
        display: table;
        background-attachment: fixed;
        filter: opacity(0.9);
      }
       .box1::after{
        width: 400px;
        height: 400px;
        background: rgb(184, 180, 180);
        margin-top: 90px;
        margin-left: 10%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
      }
      .box1-1{
        width:102%;
        height: 400px;
        background: rgba(71, 69, 69, 0.6);
        border: 1px solid rgb(71, 71, 71);
        position: relative;
        left: -10px;
        top: 0px;
        z-index: -1;
        filter: opacity(0.3);
        transform: rotate(4deg);
      }
      .box2{
        width: 46%;
      }
      .boxcenterimg{
        width: 30%;
        height: 30%;
        position: absolute;
        left: 86%;
        top: 100%;
        transform: translate(-50%,0);
      }
      .tsubakiimg{
        transform:rotateX(360deg)
      }
      .introducebox{
        width: 100%;
        height: 100px;
        position: relative;
        left: 50%;
        top: 0%;
        transform: translate(-50%, 0);
        margin-top: 8%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
      }
      .introduceboxtext{
        width: 90%;
        font-size: 48px;
        font-weight: 500;
        color: black;
      }
      .introduceboxtext2 {
        font-size: 18px;
        color: grey;
      }
      .into-star{
        width: 40px;
        height: 40px;
        position: relative;
        left: 0%;
        top: 0%;
      }
      .introcontent{
        width: 65%;
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        background: white;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        border: 2px solid black;
        border-radius:4px;
      }
      .introcontenttext{
        font-family: "Noto Sans JP";
        width: 80%;
        color:black;
        text-align: left;
        font-size: 17px;
        line-height: 1.8;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .bg1{
        width: 100%;
       background: rgb(255, 255, 255);
       border-radius: 8px;
       position: relative;
       padding-bottom: 40px;
       margin-top: 5%;
       margin-bottom: 5%;
      }
      .introcontent2{
        width: 100%;
        position: relative;
      }
      .introcontent2pic{
        width: 40%;
        border: 2px solid black;
        position: absolute;
      }
      .maru{
        width: 25px;
        height: 25px;
        background: #689f38;
        border-radius: 50%;
        position: absolute;
        left: 10%;
        top: 1%;
        box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .sen{
        width: 5px;
        height: 40px;
        background: #689f38;
        position: relative;
        left: 40%;
        top: -75%;
      }
      .sen2{
        width: 5px;
        height: 38px;
        background: #689f38;
        position: relative;
        transform: skew(12deg);
        left: 30%;
        top: -75%;
      }
      .sen3{
        width: 5px;
        height: 38px;
        background: #689f38;
        transform: skew(-8deg);
        position: relative;
        left: 50%;
        top: -75%;
      }
      .maru2{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 18%;
        top: 1%;
        box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru3{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 26%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
       .maru4{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 34%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru5{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 42%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru6{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru7{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 58%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru8{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 66%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru9{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 74%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
       .maru10{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 82%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .maru11{
        width: 25px;
        height: 25px;
        background:#689f38;
        border-radius: 50%;
        position: absolute;
        left: 90%;
        top: 1%;
         box-shadow:inset 5px 0px 2px rgba(63, 63, 63, 0.7);
      }
      .point{
        width: 10%;
        height: 100px;
        position: absolute;
        left: 80%;
        top: 2%;
        transform:rotate(18deg);
        /* background: blue; */
      }
      .pointimg{
        height: 100%;
      }
      .point::after{
        content: "Point";
        font-size: 35px;
        color: rgb(218, 16, 16);
        font-family: 'Caveat', cursive;
        position: absolute;
        left: 20%;
        top: 17%;
      }
      .middlesen{
        width: 100%;
        height: 3px;
        margin-top: 50px;
        background: rgb(255, 255, 255);
        position: absolute;
      }
       .startbox3{
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        padding-left: 10%;
        padding-right: 10%;
        z-index: -2;
      }
      .bg2{
        width: 100%;
       border-radius: 8px;
       position: relative;
       padding-bottom: 40px;
       margin-top: 5%;
       margin-bottom: 5%;
      }
      .howcontent{
        width: 100%;
        margin-top: 30px;
      }
      .howcontenttext{
        width: 50%;
        display: flex;
        justify-content: center;
        padding: 20px;
        border: 2px solid black;
        border-radius: 8px;
        z-index: 20;
        background: honeydew;
        position: relative;
        top: 50px;
      }
      .howcontenttextp{
       width: 80%;
        color:black;
        text-align: left;
        font-size: 17px;
        line-height: 1.8;
        margin-top: 10px;
      }
      .howcontentimg{
        width: 85%;
        height: 550px;
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translate(-50%, 0);
        border: 3px solid rgb(0, 0, 0);
        border-radius: 8px;
        background: black;
        z-index: -2;
        padding: 2px;
      }
      .howcontent2{
        width: 100%;
      }
      .howcontenttext2{
        width: 40%;
        display: flex;
        justify-content: center;
        padding: 20px;
        border: 2px solid black;
        border-radius: 8px;
        z-index: 20;
        background: honeydew;
        position: relative;
        left: 75%;
        top: 50%;
        margin-top: 10%;
        transform: translate(-50%,0);
      }
      .howcontenttextp2{
        width: 80%;
        color:black;
        text-align: left;
        font-size: 17px;
        line-height: 1.8;
        margin-top: 10px;
      }
       .howcontenttext3{
        width: 50%;
        display: flex;
        justify-content: center;
        padding: 20px;
        border: 2px solid black;
        border-radius: 8px;
        z-index: 20;
        background: honeydew;
      }
      .howcontenttextp3{
        width: 80%;
        color:black;
        text-align: left;
        font-size: 17px;
        line-height: 1.8;
        margin-top: 10px;
      }
@media screen and (min-width: 400px) and (max-width: 600px) {
     .macchabox{
        width: 300px;
        height: 60px;
        left: 53%;
        margin-top: -20px;
      }
       .box1{
        width: 80%;
        height: 200px;
        border: 2px solid black;
        margin-top: 50px;
      }
}
    @media screen and (min-width: 1300px) and (max-width: 1500px){
        .shopimg{
        width: 80%;
        /* height: 100%; */
      }
      }
 </style>
