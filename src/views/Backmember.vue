<template>
  <div class="outside">
    <!-- <div class="breadcrumbsstyle bg-success"> -->
      <!-- 麵包屑 -->
    <!-- <q-breadcrumbs class="">
      <q-breadcrumbs-el icon="home" label="ホームページ" to="/" class="home"/>
      <q-breadcrumbs-el  icon="storefront" label="マイページ" to="/onlineshop" />
      <q-breadcrumbs-el v-bind:label="labelname"/>
      </q-breadcrumbs>
    </div> -->
    <q-splitter
      v-model="splitterModel"
      style=""
      class="h-100 q-mt-md"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal tabstyle"
        >
          <q-tab name="accountmanage" icon="perm_identity" label="顧客帳號管理" class="acstyle"/>
          <q-tab name="buyerordermanage" icon="text_snippet" label="顧客訂單管理" class="odstyle"/>
          <q-tab name="backshop" icon="cloud_upload" label="商品上傳" class="upstyle"/>
          <q-tab name="editshop" icon="create" label="商品編輯" class="edstyle"/>
          <q-tab name="mesmange" icon="sms" label="意見欄管理" class="messtyle"/>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          class=""
          transition-prev="jump-up"
          transition-next="jump-up"
        >
        <!-- 內容 -->
          <q-tab-panel name="accountmanage">
            <div class="text-h4 q-mb-md">顧客帳號管理</div>
            <div class=""><buyeraccount></buyeraccount></div>
          </q-tab-panel>

          <q-tab-panel name="buyerordermanage">
            <div class="text-h4 q-mb-md">顧客訂單管理</div>
            <div class=""><buyerordermanage></buyerordermanage></div>
          </q-tab-panel>
          <q-tab-panel name="backshop">
            <div class="text-h4 q-mb-md">商品上傳</div>
            <div class=""><backshop></backshop></div>
          </q-tab-panel>
           <q-tab-panel name="editshop">
            <div class="text-h4 q-mb-md">商品編輯</div>
            <div class="">
            <Editshop></Editshop>
            </div>
          </q-tab-panel>
           <q-tab-panel name="mesmange">
            <div class="text-h4 q-mb-md">意見欄管理</div>
            <div class=""><backmessage></backmessage></div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import Editshop from '../components/Editshop.vue'
import Backshop from '../components/Backshop.vue'
import buyerordermanage from '../components/buyerordermanage.vue'
import buyeraccount from '../components/buyeraccount.vue'
import backmessage from '../components/backmessage.vue'
export default {
  components: { Editshop, Backshop, buyerordermanage, buyeraccount, backmessage },
  data () {
    return {
      tab: 'accountmanage',
      splitterModel: 20,
      Editshop,
      Backshop
    }
  },
  mounted () {
    console.log(this.$router.label)
  }
}
</script>
<style scoped>
.element::-webkit-scrollbar {
  display:none;
  }
.outside{
    width: 100vw;
    /* background: chartreuse; */
}
.h-100{
    height: 100%;
}
.panelsstyle .scroll{
    overflow: 0;
}
.tabstyle{
    height: 100%;
    font-size: 30px;
    margin-top: 30px;
}
.acstyle,.odstyle,.upstyle,.edstyle,.messtyle{
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
