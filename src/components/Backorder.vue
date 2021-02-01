<template>
  <div class="backshop">
     <q-form @submit.prevent="onSubmit" class="q-gutter-md">
    <div class="title">訂單管理</div>
    <div class="q-mt-md wh-100">
      <!-- 商品名稱 -->
    <div class="q-gutter-md " style="max-width: 600px">
      <div class="row "><div class="leftname">商品名稱</div>
    <q-input
    outlined
    v-model="title"
    label="商品名稱"
    :rules="[
        val => !!val || '* 必須'
        ]"
    class="inputstyle"/>
     <!-- 圖片上傳 -->
      <div class="q-gutter-md" style="max-width: 600px">
      <div class="row "><div class="leftname">商品圖片</div>
       <q-file
        @input="val => { file = val[0] }"
        filled
        multiple
        v-model="image"
        :rules="[
        val => !!val || '* 必須'
        ]"
       :filter="checkFileSize"
        class="inputstyle" >
       </q-file>
    </div>
   </div>
      <!-- 商品描述 -->
      <div class="q-gutter-md" style="max-width: 600px">
      <div class="row "><div class="leftname">商品描述</div>
      <q-input
      outlined
      v-model="lorem"
      label="商品描述(10字以內)"
      :rules="[
        val => !!val || '* 必須',
        val => val.length < 11 || '10字以內',
        ]"
      class="inputstyle"/>
    </div>
   </div>
   <!-- 商品價格 -->
    <div class="q-gutter-md" style="max-width: 600px">
      <div class="row "><div class="leftname">商品價格</div>
    <q-input
    outlined
    v-model="price"
    label="商品價格"
    :rules="[
      val => !!val || '* 必須',
      ]"
    class="inputstyle"/>
    </div>
   </div>
   <!-- 商品數量 -->
   <div class="q-gutter-md" style="max-width: 600px">
      <div class="row "><div class="leftname">商品數量</div>
    <q-input
    outlined
    v-model="quantity"
    label="商品數量"
    :rules="[
      val => !!val || '* 必須',
      ]"
    class="inputstyle"/>
    </div>
   </div>
    <!-- 商品類別 -->
   <div class="q-gutter-md" style="max-width: 600px">
      <div class="row "><div class="leftname">商品類別</div>
       <q-select
        label="商品類別"
        transition-show="scale"
        transition-hide="scale"
        filled
        v-model="category"
        :options="options"
        :rules="[
        val => !!val || '* 必須',
        ]"
        class="inputstyle"
      />
    </div>
   </div>
    </div>
      <q-btn outline style="color: red;" label="送出" type="submit" class="okbtn"/>
    </div>
     </div>
     </q-form>
    </div>
</template>
<script>
// import Top from '../components/Top.vue'
export default {
  // components: { Top }
  data () {
    return {
      file: null,
      files: null,
      options: [
        'matchabowl', 'matcha', 'dessert', 'chagu', 'others'
      ],
      title: '',
      image: null,
      lorem: '',
      price: '',
      quantity: '',
      category: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    checkFileSize (files) {
      return files.filter(file => file.size < 1024)
    },
    onSubmit () {
      console.log(this.image)
      if (this.image.size > 1024 * 1024) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '圖片太大'
        })
      } else {
        const fd = new FormData()
        fd.append('title', this.title)
        fd.append('image', this.image)
        fd.append('lorem', this.lorem)
        fd.append('price', this.price)
        fd.append('quantity', this.quantity)
        fd.append('category', this.category)
        this.axios.post(process.env.VUE_APP_API + '/products/', fd)
        console.log(this.axios)
        console.log(this.title)
          .then(res => {
            if (res.data.success) {
              console.log('success')
              this.$swal({
                icon: 'success',
                title: '上傳成功',
                text: ''
              })
            } else {
              console.log('false')
              this.$swal({
                icon: 'error',
                title: '上傳失敗',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: err.response.data.message
            })
          })
      }
    }
  }
}
</script>
<style scoped>
.wh-100{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.title{
  font-size: 35px;
  line-height: 2;
}
.leftname{
  font-size: 18px;
  /* background: chocolate; */
  line-height: 60px;
  /* width: 60px; */
  /* height: 60px; */
  margin-right: 23px;
}
.inputstyle{
  width: 380px;
}
.okbtn{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 20px;
  transition: ease-in 0.5s;
  /* border: 2px solid red; */
}
.okbtn::after{
  content: "送出";
  line-height: 70px;
  color: transparent;
  background: transparent;
  width: 70px;
  height: 70px;
  /* background: brown; */
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.okbtn:hover::after{
  background: brown;
  color: aliceblue;
  position: absolute;
  top: 0%;
  /* translate: transition(100%,0); */
  border-radius: 50%;
  z-index: 20;
  transition: ease-in 0.5s;
}
</style>
