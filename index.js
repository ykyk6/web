// 套件
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import beautifyUnique from 'mongoose-beautiful-unique-validation'
import session from 'express-session'
import connectMongo from 'connect-mongo'

// 引用routes
import productRoutes from './routes/products.js'
import userRoutes from './routes/users.js'
import orderRoutes from './routes/order.js'
import askRoutes from './routes/ask.js'

dotenv.config()

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.plugin(beautifyUnique)

const app = express()
app.use(bodyParser.json())
// 使用
app.use(cors({
  origin (origin, callback) {
    // 如果是 Postman 之類的後端, 允許
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.DEV === 'true') {
        // 如果是本機開發, 接受所有請求
        callback(null, true)
      } else if (origin.includes('github')) {
        // 如果不是本機開發, 但是是從 github 過來的請求, 允許
        callback(null, true)
      } else {
        // 如果不是本機開發, 也不是從 github 過來, 拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  credentials: true
}))
// 使用 connectMongo 連接 session 到 mongoDB
const MongoStore = connectMongo(session)

const sessionSettings = {
  // 密鑰 (任意序號)
  secret: '123456',
  // 設定儲存位置
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // 登入有效期 : 1000 = 1s
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  // 是否保存未被修改的 session
  saveUninitialized: false,
  // 是否每次請求重設時間,例如瀏覽商品等發請求動作時過期時間會重設(等於再延長)
  rolling: true,
  // 是否強制將 session 存回 mongoDB ? 即使未被修改
  resave: true
}
if (process.env.DEV === 'false') {
  // 如果不是本機的開發環境，允許不同網域的認證
  sessionSettings.cookie.sameSite = 'none'
  // 如果是不同網域的認證，一定要設定 secure
  sessionSettings.cookie.secure = true
}
app.use(session(sessionSettings))

// 一定要設不然 Heroku 無法登入 (類似代理伺服器把 node 跟那邊的網址綁一起)
app.set('trust proxy', 1)

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/order', orderRoutes)
app.use('/ask', askRoutes)

app.use((_, req, res, next) => {
  // console.log(err)
  res.status(500).send({ success: false, message: '伺服器錯誤' })
})

app.listen(process.env.PORT, () => {
  console.log('http://localhost:' + process.env.PORT)
})
