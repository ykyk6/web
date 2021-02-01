import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    user: {
      type: String
    },
    name: {
      type: String,
      required: [true, '缺少姓名']
    },
    telephonenumber: {
      type: String,
      required: [true, '缺少電話']
    },
    mail: {
      type: String,
      required: [true, '缺少信箱']
    },
    post: {
      type: String,
      required: [false, '缺少郵便番號']
    },
    city: {
      type: String,
      required: [true, '缺少居住市']
    },
    address: {
      type: String,
      reruired: [true, '缺少住址']
    },
    date: {
      type: String,
      reruired: [true, '缺少日期']
    },
    pay: {
      type: Object,
      maxlength: [1, '只能選一種'],
      reruired: [true, '缺少付款方式']
    },
    totalprice: {
      type: Number
    },
    theshipping: {
      type: Number
    },
    buyItem: {
      type: Object
    },
    ordernow: {
      type: String
    },
    delieverydate: {
      type: String
    },
    delieverynumber: {
      type: Object
    },
    info: {
      type: String
    }
  }
)

const order = mongoose.model('order', orderSchema)

export default order
