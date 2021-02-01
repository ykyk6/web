<template>
 <div class="startbox4">
        <!-- <img src="@/assets/spacewhite1.png" style="width:160%"> -->
         <!-- <div class="intro-prev-space2"></div> -->
       <div class="bg3">
       <!-- title -->
       <div class="introducebox">
         <div class="introduceboxtext">おすすめ品 <div class="sen"></div></div>
         </div>
         <!-- content -->
         <!--  -->
         <q-carousel
      v-model="slide"
      prev-icon="west"
      next-icon="east"
      swipeable
      animated
      control-color="black"
      padding
      arrows
      height="580px"
      content-class="background:transparent"
    >
      <q-carousel-slide :name="1" class="row no-wrap justify-between carousel-slide-style">
        <div class=""></div>
        <div class="yajirushitxt">Scroll</div>
        <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/matchabowl1.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              美濃焼 茶碗
         </div>
          <div class="shopdesc">
              お茶のお稽古用や自宅でお抹茶を楽しみたい時、お客様のおもてなしにおすすめなお抹茶碗。
          </div>
       <div class="shopbtn" @click="shopbtn"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <!-- <div class="yajirushitxt">Scroll</div> -->
          <div class="shopcontent">
           <div class="shoppic"> <img src="~@/assets/matchabowl2.jpg" class="shopimg"></div>
            <div class="shoptitle">
              美濃焼 茶碗
         </div>
          <div class="shopdesc">
               お茶のお稽古用や自宅でお抹茶を楽しみたい時、お客様のおもてなしにおすすめなお抹茶碗。
          </div>
         <div class="shopbtn" @click="shopbtn"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
          <div class="shopcontent">
           <div class="shoppic"> <img src="~@/assets/matchabowl3.jpg" class="shopimg"></div>
            <div class="shoptitle">
              美濃焼 茶碗
         </div>
          <div class="shopdesc">
              お茶のお稽古用や自宅でお抹茶を楽しみたい時、お客様のおもてなしにおすすめなお抹茶碗。
          </div>
          <div class="shopbtn" @click="shopbtn"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class=""></div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="row no-wrap justify-between">
        <div class=""></div>
        <div class="yajirushitxt">Scroll</div>
         <div class="yajirushitxt2">Scroll</div>
          <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/matcha1.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              抹茶
         </div>
          <div class="shopdesc">
              タピオカドリンク、かき氷、パフェにも！
          </div>
       <div class="shopbtn" @click="shopbtn2"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/matcha2.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              抹茶
         </div>
          <div class="shopdesc">
             タピオカドリンク、かき氷、パフェにも！
          </div>
       <div class="shopbtn" @click="shopbtn2"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/matcha3.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              抹茶
         </div>
          <div class="shopdesc">
              タピオカドリンク、かき氷、パフェにも！
          </div>
       <div class="shopbtn" @click="shopbtn2"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class=""></div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="row no-wrap justify-between">
        <div class=""></div>
         <div class="yajirushitxt2">Scroll</div>
         <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/dessert1.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              パフェバー
         </div>
          <div class="shopdesc">
              お茶のお稽古用や自宅でお抹茶を楽しみたい時、お客様のおもてなしにおすすめなお抹茶碗。
          </div>
       <div class="shopbtn" @click="shopbtn3"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/dessert2.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              抹茶チョコ
         </div>
          <div class="shopdesc">
              お茶のお稽古用や自宅でお抹茶を楽しみたい時、お客様のおもてなしにおすすめなお抹茶碗。
          </div>
       <div class="shopbtn" @click="shopbtn3"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class="shopcontent">
           <div class="shoppic">
               <img src="~@/assets/dessert3.jpg" class="shopimg">
           </div>
            <div class="shoptitle">
              抹茶だいふく
         </div>
          <div class="shopdesc">
              お茶のお稽古用や自宅でお抹茶を楽しみたい時、お客様のおもてなしにおすすめなお抹茶碗。
          </div>
       <div class="shopbtn" @click="shopbtn3"><div class="shopbtn2">ご購入はこちら</div></div>
         </div>
         <div class=""></div>
      </q-carousel-slide>
    </q-carousel>
       </div>
     </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    shopbtn () {
      this.$router.push('/onlineshop/matchabowl')
    },
    shopbtn2 () {
      this.$router.push('/onlineshop/matcha')
    },
    shopbtn3 () {
      this.$router.push('/onlineshop/dessert')
    }
  }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
.introduceboxtext{
        width: 100%;
        font-size: 30px;
        font-weight: 500;
        color: black;
        /* background: coral; */
      }
      .sen{
        width: 200px;
        height: 10px;
        background-image: url(~@/assets/sen.png);
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
      }
.startbox4{
        font-family: "Noto Sans JP";
        letter-spacing: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* background: lightslategrey; */
        /* margin-top: 5%; */
        position: relative;
        padding-left: 10%;
        padding-right: 10%;
        background-image: url(~@/assets/bg-white.png);
        padding-top: 10%;
        display: table;
        background-attachment: fixed;
        padding-bottom: 10%;
      }
      .content4outside{
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
      .q-carousel {
       background-color: rgba(255,255,255,0);
       /* height: 400px; */
}
      .shopcontent{
        width: 27%;
        background: rgba(248, 247, 247, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        border: 1px solid black;
        /* border-radius:4px; */
        /* padding: 1%; */
        padding: 25px 0 33px 0;
        filter: opacity(0.8);
      }
      .shopcontent::before{
        content:"";
        position: relative;
        width: 90px;
        height: 150px;
        background-image: url('~@/assets/rabbit4.png');
        background-size: contain;
        background-repeat: no-repeat;
        left: 0;
        top: -9px;
        transform: rotate(0deg);
        z-index: 20;
      }
      .shoppic{
        width: 70%;
        /* height: 50%; */
        margin-top: -5%;
        margin-bottom: px;
      }
      .shopimg{
        width: 80%;
        height: 100%;
      }
      .shoptitle{
        width: 80%;
        height: 10%;
        /* border: 1px solid black; */
        margin-top: 10px;
        color:black;
        text-align: left;
        font-size: 18px;
        line-height: 1.6;
        text-align: center;
        font-family: "Noto Sans JP";
        letter-spacing: 2px;
        font-weight: 500;
        position: relative;
        /* background: olive; */
      }
      .shoptitle::before{
          content:"";
          width: 50%;
          height:4px ;
          background-image: url(~@/assets/sen.png);
          background-repeat: no-repeat;
          background-size: contain;
          position: absolute;
          left: 30%;
          top: 81%;
          filter: opacity(0.8);
      }
      .shopdesc{
        width: 75%;
        height: 30%;
        text-align: left;
        font-size: 14px;
        /* background: darkgray; */
        margin-top: 4%;
      }
      .shopbtn{
        width: 80%;
        height: 12%;
        border: 2px solid black;
        border-radius: 5px;
        margin-top: 2%;
        /* margin-bottom: 5px; */
        background: rgb(0, 0, 0);
        position: relative;
        transition: all 0.5s;
      }
      .shopbtn2{
          font-size: 17px;
          font-weight: 500;
          color: rgb(255, 255, 255);
          line-height: 2.2;
          background: rgb(0, 0, 0);
      }
      .shopbtn::after{
      font-size: 16px;
      font-weight: 500;
      line-height: 2;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      height: 100%;
      background: rgba(179, 176, 176, 0.5);
      /* color: white; */
      z-index: 1;
      opacity: 0;
      transition: all 0.6s;
  }
    .shopbtn:hover::after{
      opacity: 1;
      width: 100%;
      cursor: pointer;
  }
      .intro-prev-space2 {
      position: relative;
      width: 100vw;
      margin-top: 0%;
      }
      .shoptotalbtn{
      width: 100%;
      height: 80px;
      /* background: darkcyan; */
      display: flex;
      justify-content: center;
      }
      .shoptotaltext{
      width: 20%;
      line-height: 80px;
      font-size: 20px;
      font-weight: 400;
      color: black;
      border: 2px solid black;
      /* border-radius: 8px; */
      padding-bottom: 10px;
      }
      .yajirushitxt{
        width: 90px;
        /* height: 10px; */
        font-size: 10px;
        position: absolute;
        left: 93%;
        top: 44%;
        /* background: violet; */
        z-index: 20;
      }
      .yajirushitxt2{
        width: 90px;
        /* height: 10px; */
        font-size: 10px;
        position: absolute;
        left: -7px;
        top: 44%;
        /* background: violet; */
        z-index: 20;
      }
      @media screen and (min-width: 1300px) and (max-width: 1500px){
        .shopimg{
        width: 80%;
        /* height: 100%; */
      }
      .q-carousel-style{
        height: 500px;
      }
      .shoptitle::before{
          width: 60%;
          left: 20%;
      }
      .shopcontent{
        width: 28%;
        height: 490px ;
        padding: 5px 0 33px 0;
      }
      .shopcontent::before{
        left: 0;
        top: 5.5%;
      }
      }
</style>
