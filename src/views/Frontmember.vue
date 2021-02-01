<template>
  <div class="outside">
    <q-splitter
      v-model="splitterModel"
      style=""
      class="q-mt-md h-100"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal tabstyle"
        >
          <q-tab name="accountmanage" icon="person" label="プロフィール変更" class="acstyle"/>
          <q-tab name="backorder" icon="create" label="パスワード設定" class="odstyle"/>
          <!-- <q-tab name="backaddress" icon="home" label="お届け先情報" class="adstyle"/> -->
          <q-tab name="backshop" icon="sticky_note_2" label="注文履歴" class="upstyle"/>
          <q-tab name="editshop" icon="sms" label="お問い合わせ" class="edstyle"/>
          <!-- <q-tab name="mesmange" icon="movie" label="意見欄管理" class="messtyle"/> -->
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          class="panelsstyle h-100"
          transition-prev="jump-up"
          transition-next="jump-up"
        >
        <!-- 內容 -->
          <q-tab-panel name="accountmanage">
            <div class="titleJ">プロフィール変更</div>
            <div class="titleE">Profile</div>
            <profile></profile>
          </q-tab-panel>

          <q-tab-panel name="backorder">
            <div class="titleJ">パスワード設定</div>
            <div class="titleE">Password</div>
            <profilepwd></profilepwd>
          </q-tab-panel>
          <q-tab-panel name="backshop">
            <div class="titleJ">注文履歴</div>
            <div class="titleE">Order</div>
            <div class=""><Buyerorders></Buyerorders></div>
          </q-tab-panel>

          <q-tab-panel name="editshop">
            <div class="titleJ">お問い合わせ</div>
            <div class="titleE">Contact us</div>
            <div class=""><frontask></frontask></div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import Buyerorders from '../components/Buyerorders.vue'
// import memberaddress from '../components/memberaddress.vue'
import profile from '../components/profile.vue'
import profilepwd from '../components/profilepwd.vue'
import frontask from '../components/frontask.vue'
export default {
  components: { profile, Buyerorders, profilepwd, frontask },
  data () {
    return {
      // labelname: this.
      tab: 'accountmanage',
      splitterModel: 20,
      profile,
      Buyerorders,
      profilepwd,
      frontask
    }
  },
  computed: {
    labelname () {
      return this.$router.label
    }
  }
}
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,800;1,500;1,600;1,700&display=swap');
.element::-webkit-scrollbar {
  display:none;
  }
.outside{
    width: 100vw;
    background-image: url(~@/assets/bg-grey2.png);
    font-family: "Noto Sans JP";
}
.titleJ{
  font-weight: 500;
  line-height: 1.6;
  font-size: 28px;
  margin-top: 30px;
}
.titleE{
  font-family: 'Bodoni Moda', serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  /* margin-bottom: 20px; */
}
.h-100{
    height: 100vh;
}
.panelsstyle{
    background-image: url(~@/assets/bg-white.png);
}
.tabstyle{
    height: 100%;
    font-size: 30px;
    padding-top: 60px;
}
.acstyle,.odstyle,.adstyle,.upstyle,.edstyle,.messtyle{
    /* height: 20%; */
    font-size: 30px;
    margin-top: 25px;
    color: rgb(1, 2, 0);
}
.q-tab__label{
    font-size: 20px;
    line-height: 50px;
    font-weight: 400;
}
</style>
