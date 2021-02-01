<template>
  <div class="q-pa-md row justify-center">
    <div class="tablestyle">
    <q-markup-table style="width: 1000px; max-width: 85vw;">
      <!-- <thead>
        <tr>
          <th class="text-left">ご購入者情報</th>
        </tr>
      </thead> -->
      <tbody>
        <tr class="">
          <td class="text-left w-2 bg-grey-3">宛先名</td>
          <td class="text-left"></td>
        </tr>
        <tr>
          <td class="text-left w-2 bg-grey-3">郵便番号</td>
          <td class="text-left"></td>
        </tr>
        <tr>
          <td class="text-left w-2 bg-grey-3">都道府縣</td>
          <td class="text-left"></td>
        </tr>
        <tr>
          <td class="text-left w-2 bg-grey-3">住所</td>
          <td class="text-left"></td>
        </tr>
        <tr>
          <td class="text-left w-2 bg-grey-3">電話番号</td>
          <td class="text-left"></td>
        </tr>
         <tr>
          <td class="text-left w-2 bg-grey-3">メールアドレス</td>
          <td class="text-left"></td>
        </tr>
      </tbody>
    </q-markup-table>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.w-2{
  width: 10%;
}
.w-9{
  width: 80%;
}
.q-table__card {
    color: #000;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 5px rgb(255, 255, 255);
    border: 1px solid black;
    padding: 5px;
}
.tablestyle{
  width: 100%;
  display: flex;
  justify-content:center;
  margin-top: 20px;
}
</style>
