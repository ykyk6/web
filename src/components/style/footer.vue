<template>
 <div class="startbox4">
       <div class="container row justify-center">
         <!-- content -->
        <div class="left">
            <div class="logo"></div>
            <div class="logotxt">まっちゃまっちゃ株式会社</div>
        </div>
        <div class="right">
            <div class="ue">
                <div class="contact">Contact us</div>
                <div class="text-white text-left info">
                    <div class=" text-amber-4">maccha株式会社</div>
                    <div class="">東京本社所在地 ➯</div>
                    <div>〒101-0047</div>
                    <div>東京都千代田区神田2丁目12-5</div>
                </div>
            </div>
            <div class="shita column items-center">
                <div class="icon row">
                    <q-icon name="mail_outline" size="20px" class="q-mr-sm iconhover"/>
                    <q-icon name="facebook" size="20px" class="q-mr-sm iconhover"/>
                    <q-icon name="fab fa-instagram" size="20px" class="q-mr-sm iconhover"/>
                     <q-icon name="fab fa-twitter" size="20px" class="q-mr-sm iconhover"/>
                     <q-icon name="fab fa-line" size="20px" class="iconhover"/>
                    </div>
            </div>
        </div>
        <div class="other">
             <div class="otherleft">
                 <div class="link">LINK</div>
                 <div class="top1 q-mt-md" @click="topbtn">Top</div>
                 <div class="onlineshop q-mt-sm" @click="shopbtn">Onlineshop</div>
                 <div class="ask q-mt-sm" @click="askbtn">Ask</div>
                 <div class=""></div>
             </div>
             <div class="copyright">Copyright © WASA All Rights Reserved</div>
        </div>
         <!--  -->
       </div>
     </div>
</template>
<script>
export default {
  name: 'ScrollTop',
  data () {
    return {
      // 定义滚动条默认位置
      scrollTop: null,
      // 定义按钮默认状态
      isScrollTop: false
    }
  },
  mounted () {
  },
  methods: {
    topbtn () {
      document.getElementById('app').scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    shopbtn () {
      this.$router.push('/onlineshop')
    },
    askbtn () {
      this.$router.push('/message')
    }
  }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,800;1,500;1,600;1,700&display=swap');
.startbox4{
        font-family: "Noto Sans JP";
        letter-spacing: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-image: url(~@/assets/bg-black.png);
        background-attachment: fixed;
        padding-top: 20px;
      }
    .container{
        width: 75%;
        /* height: 250px; */
        /* background: lawngreen; */
        margin: 3%;
    }
    .left{
        width: 25%;
        /* height: 100%; */
        /* background: lightcoral; */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .left::after{
        content: "";
        width: 1px;
        height: 80%;
        border:1px dashed rgb(226, 226, 226);
        position: absolute;
        top: 10%;
        right: -18%;
        filter: opacity(0.7);
    }
    .logo{
        width: 70%;
        height: 100%;
        /* background: lightslategray; */
        background-image: url(~@/assets/logo2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        filter:opacity(0.8)
    }
    .logotxt{
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-lr;
        font-size: 13px;
        color:white;
        /* background: orangered; */
        text-align: left;
        padding-top: 15px;
        margin-left: 3%;
    }
    .right{
        width:50%;
        display: flex;
        flex-direction: column;
        /* background: chocolate; */
        padding-left: 10px;
        position: relative;
    }
    .right::after{
        content: "";
        width: 1px;
        height: 80%;
        border:1px dashed rgb(226, 226, 226);
        position: absolute;
        top: 10%;
        right: 10%;
        filter: opacity(0.7);
    }
    .ue{
        width: 100%;
        height: 80%;
        /* background: olive; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 1px solid white; */
    }
    .shita{
        width: 100%;
        height: 20%;
        /* background: orange; */
        justify-content: center;
        color: rgba(255, 255, 255, 0.7);
    }
    .contact{
        width: 100%;
        height: 25%;
        font-family: 'Bodoni Moda', serif;
        font-weight: 600;
        color: rgb(255, 255, 255);
        font-size: 25px;
        position: relative;
        /* background: rgba(250, 255, 241,0.8); */
    }
    .contact::after{
        content: "";
        width: 60%;
        height: 1px;
        background: rgba(255, 255, 255,0.7);
        position: absolute;
        left: 20%;
        top: 100%;
        /* margin-top: 8px; */
        filter: opacity(0.8);
    }
    .info{
        /* background: turquoise; */
        width: 100%;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .info::after{
        content: "";
        width: 60%;
        height: 1px;
        background: rgba(255, 255, 255,0.7);
        position: absolute;
        left: 20%;
        top: 100%;
        /* margin-top: 8px; */
        filter: opacity(0.8);
    }
    .icon{
        height: 100%;
        display: flex;
        align-items: center;
        /* background: crimson; */
    }
    .other{
        width: 25%;
        height: 100%;
        /* background: cornflowerblue; */
        display: flex;
        flex-direction: row;
    }
    .copyright{
        width: 20%;
        /* background: saddlebrown; */
        display: flex;
        align-items: center;
        -webkit-writing-mode: vertical-lr;
        writing-mode: vertical-rl;
        color: white;
    }
    .otherleft{
        width: 80%;
        /* background: rosybrown; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 1px solid rosybrown; */
    }
    .top1,.onlineshop,.ask{
        width: 70%;
        border: 1px solid white;
        color: white;
        padding: 5px;
        position: relative;
        transition: all 0.5s;
    }
     .top1::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      height: 100%;
      background: rgba(5, 5, 5, 0.5);
      color: white;
      z-index: 1;
      opacity: 0;
      transition: all 0.6s;
  }
    .top1:hover::after{
      opacity: 1;
      width: 100%;
      cursor: pointer;
  }
    .onlineshop::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      height: 100%;
      background: rgba(5, 5, 5, 0.5);
      color: white;
      z-index: 1;
      opacity: 0;
      transition: all 0.6s;
  }
    .onlineshop:hover::after{
      opacity: 1;
      width: 100%;
      cursor: pointer;
  }
    .ask::after{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      height: 100%;
      background: rgba(5, 5, 5, 0.5);
      color: white;
      z-index: 1;
      opacity: 0;
      transition: all 0.6s;
  }
    .ask:hover::after{
      opacity: 1;
      width: 100%;
      cursor: pointer;
  }
    .link{
        width: 70%;
        color: white;
        padding: 5px;
    }
    .iconhover:hover{
      color: peru;
      cursor: pointer;
    }
      @media screen and (min-width: 1300px) and (max-width: 1500px){
      }
</style>
