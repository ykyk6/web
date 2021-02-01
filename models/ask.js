import mongoose from 'mongoose'

const Schema = mongoose.Schema

const askSchema = new Schema(
  {
    userid:{
      type: String
    },
    date: {
      type: String,
      reruired: [true, '缺少日期']
    },
    user: {
      type: String
    },
    account: {
      type: String
    },
    title: {
      type: String
    },
    name: {
      type: String,
      required: [true, '缺少姓名']
    },
    mail: {
      type: Object,
      required: [true, '缺少信箱']
    },
    question: {
      type: String,
      reruired: [true, '缺少問題']
    },
    reply: {
      type: String
    },
    isReply: {
      type: Boolean
    }
  }
)

const ask = mongoose.model('ask', askSchema)

export default ask
