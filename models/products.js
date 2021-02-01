import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, '缺少商品名稱']
    },
    image: {
      type: String,
      required: [false, '缺少首圖']
    },
    lorem: {
      type: String,
      maxlength: [10, '需10字以下'],
      required: [true, '缺少描述']
    },
    price: {
      type: Number,
      required: [true, '缺少商品價格']
    },
    quantity: {
      type: Number,
      reruired: [true, '卻少數量']
    },
    contentimage: {
      type: String,
      required: [true, '缺少詳情圖片']
    },
    description: {
      type: String,
      required: [true, '缺少詳情描述']
    },
    category: {
      type: String,
      required: [true, '缺少類別']
    }
  }
)

const products = mongoose.model('products', productSchema)

export default products
