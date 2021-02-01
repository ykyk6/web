<template>
  <div class="q-pa-md bg-amber-11">
    <div class="bg-grey-2 q-pa-sm rounded-borders">
        <div class="">row
         <q-item class=" bg-dark column aaa">
        <q-item-section avatar class=" bg-deep-orange-1 items-center">
       <q-radio v-model="color" val="teal" color="teal" />
</q-item-section>
 <q-item-section>
         <q-card class="my-card row" flat bordered>
      <div class="imgbox">
      <q-img
        src="http://localhost:3000/products/file/bank.png" class="img"
      /></div>
      <div class="contenttext">
      <q-card-section>
        <div class="text-orange-9">振込手数料はご負担下さい。</div>
        <div class="text-h6 q-mt-sm q-mb-sm">銀行振り込み</div>
        <div class="text-caption text-grey">
          振込先情報は購入完了メールに記載されております。振込手数料はご負担下さい。
        </div>
      </q-card-section>
      </div>
      <div class="w-10 bg-grey-4 row justify-center">
      <q-card-actions class="">
        <q-btn
        flat
        dense
        color="black"
        label="選択する"
        class="btnbank"
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"/>
        <q-space />
      </q-card-actions>
      </div>

      <q-slide-transition class="">
        <div v-show="expanded" class="w-10 cardinputbox">
          <q-separator />
          <q-card-section class="text-subitle2">
           <!--  -->
          <!--  -->
           <div class="q-pa-md row justify-center items-center w-10">
    <table class="w-10 q-pa-md" style="border:1px solid #000;">
      <!-- info -->
      <thead>
        <tr>
          <th class="text-center bg-orange-4">どのようにお支払いしますか？</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class=" text-left">
            入金期限は購入の翌日から数えて土日祝日を除いた5営業日以内です。
          ※期限を過ぎた場合には自動的にキャンセルとなります。
          </td>
        </tr>
      </tbody>
    </table>
    <div class=" q-mt-md surebtn">
     <q-btn color="black" label="確認" name="123" @click="btnok('銀行振り込み')"/></div>
          </div>
          <!--  -->
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
     </q-item-section>
         </q-item>
         <!--  -->
         <q-item class=" bg-dark column">
        <q-item-section avatar class=" bg-deep-orange-1 items-center">
       <q-radio v-model="color" val="teal" color="teal" />
</q-item-section>
 <q-item-section>
         <q-card class="my-card row" flat bordered>
      <div class="imgbox">
      <q-img
        src="http://localhost:3000/products/file/bank.png" class="img"
      /></div>
      <div class="contenttext">
      <q-card-section>
        <div class="text-orange-9">振込手数料はご負担下さい。</div>
        <div class="text-h6 q-mt-sm q-mb-sm">銀行振り込み</div>
        <div class="text-caption text-grey">
          振込先情報は購入完了メールに記載されております。振込手数料はご負担下さい。
        </div>
      </q-card-section>
      </div>
      <div class="w-10 bg-grey-4 row justify-center">
      <q-card-actions class="">
        <q-btn
        flat
        dense
        color="black"
        label="選択する"
        class="btnbank"
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"/>
        <q-space />
      </q-card-actions>
      </div>

      <q-slide-transition class="">
        <div v-show="expanded" class="w-10 cardinputbox">
          <q-separator />
          <q-card-section class="text-subitle2">
           <!--  -->
          <!--  -->
           <div class="q-pa-md row justify-center items-center w-10">
    <table class="w-10 q-pa-md" style="border:1px solid #000;">
      <!-- info -->
      <thead>
        <tr>
          <th class="text-center bg-orange-4">どのようにお支払いしますか？</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class=" text-left">
            入金期限は購入の翌日から数えて土日祝日を除いた5営業日以内です。
          ※期限を過ぎた場合には自動的にキャンセルとなります。
          </td>
        </tr>
      </tbody>
    </table>
    <div class=" q-mt-md surebtn">
     <q-btn color="black" label="確認" name="123" @click="btnok('銀行振り込み')"/></div>
          </div>
          <!--  -->
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
     </q-item-section>
         </q-item>
         </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      preferred: 'rock',
      accepted: [],

      options: [
        {
          label: 'Rock',
          value: 'rock'
        },
        {
          label: 'Funk',
          value: 'funk'
        },
        {
          label: 'Pop',
          value: 'pop'
        }
      ],

      submitResult: []
    }
  },

  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []
      for (const [name, value] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }

      this.submitResult = submitResult
    }
  }
}
</script>
<style scoped>
.aaa{
    position: absolute;
    left: 0;
    top: 20%;
}
</style>
