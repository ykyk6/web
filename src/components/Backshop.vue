<template>
  <div class="backshop">
     <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="q-mt-md inputbox">
      <!-- 商品名稱 -->
    <div class="q-gutter-md">
      <div class="row "><div class="leftname">商品名稱</div>
    <q-input
    outlined
    v-model="title"
    label="商品名稱"
    :rules="[
        val => !!val || '* 必須'
        ]"
    class="inputstyle"/>
    </div>
    </div>
     <!-- 商品類別 -->
   <div class="q-gutter-md">
      <div class="row w-100"><div class="leftname">商品類別</div>
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
     <!-- 首圖上傳 -->
      <div class="q-gutter-md">
      <div class="row "><div class="leftname">商品圖片</div>
       <q-file
        v-model="image"
        filled
        multiple
        hint="最多兩張"
        :rules="[
        val => !!val|| '* 必須'
        ]"
        class="inputstyle" >
       </q-file>
    </div>
   </div>
      <!-- 首頁商品描述 -->
      <div class="q-gutter-md">
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
    <div class="q-gutter-md">
      <div class="row "><div class="leftname">商品價格</div>
    <q-input
    outlined
    type="number"
    v-model="price"
    label="商品價格"
    :rules="[
      val => !!val || '* 必須'
      ]"
    class="inputstyle"/>
    </div>
   </div>
   <!-- 商品數量 -->
   <div class="q-gutter-md">
      <div class="row"><div class="leftname">商品數量</div>
    <q-input
    outlined
    type="number"
    v-model="quantity"
    label="商品數量"
    :rules="[
      val => !!val || '* 必須'
      ]"
    class="inputstyle"/>
    </div>
   </div>
   <!-- 商品詳情圖 -->
    <div class="q-gutter-md">
      <div class="row"><div class="leftname">詳情圖片</div>
        <q-file
        v-model="contentimage"
        multiple
        filled
        hint="最多三張"
        class="inputstyle" >
       </q-file>
      </div>
      </div>
       <!-- 商品詳情描述 -->
     <div class="q-gutter-md q-mt-sm">
      <div class="row"><div class="leftname">詳情描述</div>
      <div class="q-mb-md">
      <q-editor
      v-model="description"
      dense
      :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
      class="w-50"
    />
  </div>
    </div>
      <q-btn outline style="color: red;" label="送出" type="submit" class="okbtn"/>
      <q-btn outline style="color: green;" label="清空" type="reset" class="clearbtn"/>
    </div>
     </div>
     </q-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      options: [
        'matchabowl', 'matcha', 'dessert', 'chagu', 'others'
      ],
      title: '',
      image: null,
      lorem: '',
      price: '',
      quantity: '',
      contentimage: null,
      description: '',
      category: ''
    }
  },
  methods: {
    checkFileSize (files) {
      return files.filter(file => file.size < 1024 * 1024)
    },
    factoryFn (files) {
      return {
        url: 'http://localhost:3000/products',
        method: 'POST'
      }
    },
    onReset () {
      this.title = ''
      this.image = ''
      this.lorem = ''
      this.price = ''
      this.quantity = ''
      this.contentimage = ''
      this.description = ''
      this.category = ''
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
        console.log(this.image)
        const fd = new FormData()
        fd.append('title', this.title)
        fd.append('lorem', this.lorem)
        fd.append('price', this.price)
        fd.append('quantity', this.quantity)
        fd.append('description', this.description)
        fd.append('category', this.category)
        for (const contentimage of this.contentimage) {
          fd.append('contentimage', contentimage)
        }
        for (const image of this.image) {
          fd.append('image', image)
        }
        this.axios.post(process.env.VUE_APP_API + '/products/', fd)
        // console.log(this.axios)
        // console.log(this.image)
        // console.log(this.contentimage)
          .then(res => {
            console.log(fd)
            console.log(fd)
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
.backshop{
  width: 60vw;
  /* height: 100vh; */
  /* background: chocolate; */
  margin-top: 5%;
  overflow-y: hidden;
  margin-left: 7%;
}
.wh-100{
  overflow-y: hidden;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  /* justify-content: center; */
  margin-top: 25px;
}
.w-100{
  width: 100%;
}
.inputbox{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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
  width: 500px;
}
.okbtn{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 25px;
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
.clearbtn{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 20px;
  transition: ease-in 0.5s;
  /* border: 2px solid red; */
}
.clearbtn::after{
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
.clearbtn:hover::after{
  background: rgb(26, 124, 47);
  color: aliceblue;
  position: absolute;
  top: 0%;
  /* translate: transition(100%,0); */
  border-radius: 50%;
  z-index: 20;
  transition: ease-in 0.5s;
}
.q-uploader__header{
  background: grey;
}
.w-50{
  width: 500px;
}
</style>
