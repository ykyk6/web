import users from '../models/users.js'

// 註冊帳號
export const createUser = async (req, res) => {
  // 1. 沒有 jason 格式的先out
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '格式錯誤' })
    return
  }
  try {
    await users.create(req.body)
    res.status(200).send({ success: true, message: '' })
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Object.keys :返回陣列
      // error 裡的 errors 項裡第一個訊息
      const key = Object.keys(error.errors)[0]
      // errors 項裡 message 欄位顯示的訊息
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
    console.log(error)
  }
}
// 登入帳號
export const loginUser = async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '格式錯誤' })
    return
  }
  try {
    // 去查詢有沒有這個帳號
    const result = await users.findOne(req.body)
    if (result !== null) {
      // 把傳進來的資料記錄起來，給他一組序號的感覺
      // 把使用者資料紀錄到 session
      // session給的序號裡最後面多了帳號資料，如果沒有登入就沒有
      req.session.user = result
      res.status(200).send({ success: true, message: '', result })
    } else {
      res.status(404).send({ success: false, message: 'アカウントが見つかりません' })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.key(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
    console.log(error)
  }
}

export const logoutUser = async (req, res) => {
  req.session.destroy(error => {
    // 如果遇到錯誤:
    if (error) {
      res.status(500).send({ success: false, message: '發生錯誤無法登出' })
    } else {
      // 把對方瀏覽器的認證資訊給刪掉
      res.clearCookie()
      res.status(200).send({ success: true, message: '' })
    }
  })
}

export const getUser = async (req, res) => {
  try {
    const result = await users.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '發生錯誤' })
  }
}

export const editUser = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }
  try {
    let result = await users.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await users.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'ValidatinError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID格式錯誤' })
      console.log(req.body)
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

// 每隔一段時間送出請求來延長登入時間
// 檢查有沒有登入
export const heartbeat = async (req, res) => {
  let isLogin = false
  if (req.session.user) {
    isLogin = true
  }
  res.status(200).send(isLogin)
}
