<template>
    <!-- 第二段 -->
    <div class="startbox3 q-pt-md">
        <!-- <div class="bigbg4"><img src="~@/assets/bg-grey.png" class="bg-grey"></div> -->
        <div class="start">
          <div class="startribbon"><img src="~@/assets/ribbon.png" class="ribbon1"></div>
          <!-- <div class="howtosub"> 茶道の作法について</div> -->
          <div class="startcontent">
            <div class="say">
              <!-- 1 -->
              <div class="saycontent">
                <div class="left">
                  <div class="leftframe"><div class="leftframetxt">suwarikata</div></div>
                </div>
                <div class="right">
                  <div class="righttxt">
                     <div class=" text-white bg-black righttitle1 q-pl-sm"> ① 茶室での座り方 ー</div><div class="righttitle2"></div><br>
                  会を催す亭主の近くには、まず主賓である正客が座ります。以下、次客、三客、最後にお詰めという順番です。
        正客は、亭主とやり取りをし、茶会を進行します。末席とも言われるお詰めは、回ってきた茶道具などを片付けるなど、茶会のサポートをする役です。どちらも重要な役割を担うので、お茶の経験が豊富で、幅広い知識が必要となります。このため、正客とお詰めの2名は、事前に亭主によって指名されています。茶会にあまり慣れていない方は、最初と最後以外の、真ん中あたりの席に座ると安心です。
                </div>
                </div>
              </div>
              <!-- 2 -->
              <div class="saycontent">
                <div class="left2">
                  <div class="lefttxt">
                    <div class=" text-white bg-black righttitle1 text-center"> ② お茶の点て方 ー</div><div class="righttitle2"></div><br>
                  準備として、抹茶がダマにならないようにふるいにかけておきましょう。お湯は軟水を沸騰させたものを80℃ぐらいに冷ましておきます。まず抹茶1～2gを、茶杓で茶碗に入れ、柄杓でお湯60～70㏄を注ぎます。片手で茶碗を押さえ、茶筅をよく動かして撹拌します。
                </div>
                </div>
                <div class="right2">
                  <div class="rightframe">
                    <div class="rightframetxt">tatekata</div>
                  </div>
                </div>
              </div>
              <!-- 3 -->
              <div class="saycontent">
                <div class="left3">
                  <div class="left3img"></div>
                </div>
                <div class="right3">
                   <div class="righttxt2">
                    <div class=" text-white bg-black righttitle1 text-left q-pl-sm"> ③ お茶の飲み方 ー</div><div class="righttitle2"></div><br>
                    まず茶碗を右手で取り、正面に置きます。そして「お点前、頂戴します」と亭主に挨拶をし、茶碗を手に取ります。絵柄などがある茶碗の正面に口をつけるのを避けるため、左手の上で時計回りに2回茶碗を回しましょう。お茶を3～4回に分けて飲み、最後は飲み終わったという合図として、音を立てて吸いきります。そして飲み口を指でぬぐい、指は懐紙で拭きます。最後に左手の上で2回、茶碗を反時計回りに回して正面に戻し、出された位置に置きます。今回ご紹介したのは裏千家流ですが、流派によって飲み方にも多少の違いがあります。
                </div>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
          <!--  -->
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;800;900&display=swap');
   .startbox3{
        font-family: "-apple-system", BlinkMacSystemFont, "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "Noto Sans Japanese", "ヒラギノ角ゴ Pro W3", "メイリオ", "Hiragino Kaku Gothic ProN", "MS PGothic", Osaka, "sans-serif";
        width: 100%;
        background-image: url(~@/assets/bg-grey.png);
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 20;
        padding-bottom: 150px;
        padding-top: 130px;
      }
     .bg-grey{
        width: 100%;
      }
      .bigbg4{
        width: 100%;
        height: 3000px;
        position: absolute;
        left: 0%;
        top: 0%;
        /* transform: rotate(-3deg); */
        z-index: 0;
      }
      .start{
        width: 100%;
        /* background: chocolate; */
        z-index: 5;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .startribbon{
        width: 100%;
        /* height: 100px; */
        /* background: rgba(252, 252, 252);
        filter: opacity(0.8); */
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 10;
      }
      .ribbon1{
        height: 100%;
      }
      .startribbon::after{
        font-family: 'Caveat', cursive;
        content: "HOW TO";
        width: 100%;
        position: absolute;
        left: 0;
        top: 10%;
        font-size: 32px;
        line-height: 1.6;
        font-weight: 600;
        color: rgb(48, 47, 47);
        /* background: chocolate; */
      }
      .startcontent{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: -3%;
        /* background: lightblue; */
      }
      .startcontent2{
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .howto1content{
        width: 350px;
        height: 350px;
        /* background: brown; */
        border-radius: 50%;
        border: 2px solid black;
        background: rgba(255, 255, 255, 0.6);
      }
      .say{
        width: 80%;
        /* height: 1000px; */
        background: rgba(255, 255, 255, 0.6);
        filter: opacity(0.7);
        border-radius: 7px;
        padding-top: 80px;
      }
      .sayimg{
        width: 80%;
        filter: opacity(0.7);
      }
      .saycontent{
        width: 100%;
        /* height: 500px; */
        /* background: lightcoral; */
        display: flex;
      }
      .left{
        width: 40%;
        /* height: 500px; */
        /* background: rgb(19, 2, 5); */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 90px;
      }
      .right{
        width: 60%;
        /* height: 500px; */
        /* background: lightslategrey; */
        margin-top: 90px;
        display: flex;
        align-items: center;
      }
      .leftframe{
        width: 80%;
        height: 430px;
        border: 2px solid black;
        transform: rotate(-3deg);
        margin-left: 40px;
      }
      .leftframe::after{
        content: "";
        width: 90%;
        height: 300px;
        border: 2px solid black;
        position: absolute;
        left: 5% ;
        top: 5%;
        background-image: url(~@/assets/ochapic3.png);
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
      }
       .leftframe::before{
        content: "";
        width: 50%;
        height: 70px;
        /* border: 2px solid black; */
        position: absolute;
        left: 25% ;
        top: -10%;
        /* background: cadetblue; */
        z-index: 10;
        background-image: url(~@/assets/masktap3.png);
        background-size:cover;
        background-repeat: no-repeat;
        background-position: right;
        transform: rotate(-10deg);
        filter: opacity(0.5);
      }
      .leftframetxt{
        font-family: 'Caveat', cursive;
        font-size: 50px;
        font-weight: 600;
        width: 220px;
        height: 80px;
        /* background: teal; */
        color: rgba(85, 122, 42, 0.8);
        position: absolute;
        left: 22%;
        top: 80%;
        line-height: 68px;
        transform: rotate(-3deg);
      }
      .righttxt{
        font-family: "Noto Sans JP";
        letter-spacing: 2px;
        line-height: 2;
        width: 80%;
        font-size: 18px;
        margin: auto;
        color: #000;
        text-align: left;
      }
      .righttitle2{
        width: 100%;
        height: 2px;
        background: black;
        position: relative;
        left: 0;
        top: 8px ;
      }
      .rightframetxt{
        font-family: 'Caveat', cursive;
        font-size: 50px;
        font-weight: 600;
        width: 220px;
        height: 80px;
        /* background: teal; */
        color: rgba(85, 122, 42, 0.8);
        position: absolute;
        left: 22%;
        top: 80%;
        line-height: 68px;
        transform: rotate(3deg);
      }
        .left2{
        width: 60%;
        /* height: 500px; */
        /* background: rgb(255, 220, 226); */
        display: flex;
        justify-content: center;
        /* align-items: center; */
        margin-top: 120px;
        /* margin-bottom: 50px; */
        position: relative;
      }
       .lefttxt{
        font-family: "Noto Sans JP";
        letter-spacing: 2px;
        line-height: 2;
        width: 80%;
        font-size: 18px;
        margin: auto;
        color: #000;
        text-align: left;
        /* background: blanchedalmond; */
      }
      .right2{
        width: 40%;
        /* height: 500px; */
        /* background: lightslategrey; */
         margin-top: 120px;
         display: flex;
         align-items: center;
         /* margin-bottom: 30px; */
      }
        .rightframe{
        width: 80%;
        height: 430px;
        border: 2px solid black;
        transform: rotate(3deg);
        margin-left: 40px;
      }
      .rightframe::after{
        content: "";
        width: 90%;
        height: 300px;
        border: 2px solid black;
        position: absolute;
        left: 5% ;
        top: 5%;
        background-image: url(~@/assets/ochapic4.png);
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .rightframe::before{
        content: "";
        width: 50%;
        height: 70px;
        /* border: 2px solid black; */
        position: absolute;
        left: 20% ;
        top: -10%;
        /* background: cadetblue; */
        z-index: 10;
        background-image: url(~@/assets/masktap3.png);
        background-size:cover;
        background-repeat: no-repeat;
        transform: rotate(10deg);
        filter: opacity(0.5);
      }
      .left2::after{
        content: "";
        width: 50%;
        height: 90px;
        /* background: coral; */
        background-image: url(~@/assets/yajirushi1.png);
        background-size:contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 80%;
        top: 93%;
        transform: rotate(10deg);
      }
      .left2::before{
        content: "point";
        font-family: 'Caveat', cursive;
        width: 30%;
        /* height: 90px; */
        /* background: coral; */
        /* background-image: url(~@/assets/yajirushi1.png); */
        font-size: 47px;
        color: blak;
        line-height: 1.8;
        background-size:contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 54%;
        top: 94%;
        transform: rotate(-5deg);
      }
       .left3{
        width: 20%;
        height: 500px;
        /* background: rgb(19, 2, 5); */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
        position: relative;
      }
      .left3img{
        width: 100%;
        height: 280px;
        background-image: url(~@/assets/rabbit3.png);
        background-size:contain;
        background-repeat: no-repeat;
        margin-left: 80px;
        /* background: violet; */
      }
      .left3img::after{
        content:"❕";
        width: 90px;
        height: 90px;
        /* background: chartreuse; */
        position: absolute;
        left: 87%;
        top: 22%;
        background-image: url(~@/assets/point.png);
        background-size: contain;
        background-repeat: no-repeat;
        transform: rotate(22deg);
        filter: opacity(0.9);
        font-size: 30px;
        line-height: 2.3;
      }
      .right3{
        width: 80%;
        height: 500px;
        /* background: lightslategrey; */
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .righttxt2{
        font-family: "Noto Sans JP";
        letter-spacing: 2px;
        line-height: 2;
        width: 80%;
        font-size: 18px;
        color: #000;
        text-align: left;
      }
      @media screen and (min-width:1200px) and (max-width: 1500px){
       .startbox3{
         padding-top: 100px;
        }
        .lefttxt{
          font-size: 16px;
        }
        .righttxt{
          font-size: 16px;
        }
        .righttxt2{
          font-size: 16px;
        }
        .say{
        width: 100%;
        /* height: 500px; */
        background: rgba(255, 255, 255, 0.6);
        filter: opacity(0.7);
        border-radius: 7px;
      }
        .bigbg4{
        width: 200%;
        transform: rotate(-3deg);
      }
       .leftframe{
        width: 80%;
        height: 350px;
      }
      .leftframe::after{
        content: "";
        width: 90%;
        height: 230px;
        border: 2px solid black;
        position: absolute;
        left: 5% ;
        top: 5%;
      }
        .rightframe{
        width: 80%;
        height: 350px;
      }
      .rightframe::after{
        width: 90%;
        height: 230px;
      }
      .startcontent {
    margin-top: -5%;
     }
      }
</style>
