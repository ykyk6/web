import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: [true, '缺少email']
    },
    account: {
      type: String,
      minlength: [3, '帳號需3字以上'],
      maxlength: [10, '帳號需10字以下'],
      required: [true, '缺少帳號']
    },
    password: {
      type: String,
      minlength: [3, '密碼需3字以上'],
      maxlength: [10, '密碼需10字以下'],
      required: [true, '缺少密碼']
    },
    manager: {
      type: Boolean
    }
  },

  {
    versionKey: false
  }
)

const users = mongoose.model('users', userSchema)

export default users
