<template>
  <div class="outside">
     <div class="breadcrumbsstyle bg-success">
      <!-- 麵包屑 -->
    <q-breadcrumbs class="">
      <q-breadcrumbs-el icon="home" label="ホームページ" to="/" class="home"/>
      <q-breadcrumbs-el  icon="storefront" label="マイページ" to="/onlineshop" />
      <q-breadcrumbs-el v-bind:label="labelname"/>
    </q-breadcrumbs>
    </div>
    <q-splitter
      v-model="splitterModel"
      style=""
      class="h-100 q-mt-md"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal bg-danger tabstyle"
        >
          <q-tab name="backshop" icon="mail" label="顧客帳號管理" class="acstyle"/>
          <q-tab name="alarms" icon="alarm" label="顧客訂單管理" class="odstyle"/>
          <q-tab name="movies" icon="movie" label="商品上傳" class="upstyle"/>
          <q-tab name="movies" icon="movie" label="商品編輯" class="edstyle"/>
          <q-tab name="movies" icon="movie" label="意見欄管理" class="messtyle"/>
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
          <q-tab-panel name="backshop">
            <div class="text-h4 q-mb-md">顧客帳號管理</div>
            <div class=""><Backshop></Backshop></div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">顧客訂單管理</div>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">商品上傳</div>
          </q-tab-panel>

           <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">商品編輯</div>
          </q-tab-panel>

           <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">意見欄管理</div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import Backshop from '../components/Backshop.vue'
export default {
  components: { Backshop },
  data () {
    return {
      tab: 'Backshop',
      splitterModel: 20,
      Backshop
    }
  }
}
</script>
<style scoped>
.outside{
    width: 100vw;
}
.h-100{
    height: 100%;
}
.tabstyle{
    height: 100%;
    font-size: 20px;
}
.acstyle,.odstyle,.upstyle,.edstyle,.messtyle{
    height: 16%;
    font-size: 30px;
    line-height:16% ;
}
.q-tab__label{
    font-size: 20px;
    line-height: 50px;
    font-weight: 400;
}
</style>
