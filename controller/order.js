import order from '../models/order.js'

export const ordercreate = async (req, res) => {
  console.log(req.session.user)
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }
  try {
    console.log(req.body)
    let buyItem = []
    buyItem = req.body.buyItem
    const result = await order.create({
      user: req.session.user._id,
      name: req.body.name,
      telephonenumber: req.body.telephonenumber,
      mail: req.body.mail,
      post: req.body.post,
      city: req.body.city,
      address: req.body.address,
      date: req.body.date,
      pay: req.body.pay,
      totalprice: req.body.totalprice,
      theshipping: req.body.theshipping,
      ordernow: req.body.ordernow,
      delieverydate: req.body.delieverydate,
      delieverynumber: req.body.delieverynumber,
      info: req.body.info,
      buyItem
    })
    res.status(200).send({ success: true, message: '', result })
    console.log(result)
    //   console.log(req.body)
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      console.log(error)
      res.status(400).send({ success: false, message })
      // console.log(message)
    } else {
      // console.log(error)
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getOrder = async (req, res) => {
  try {
    const result = await order.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '發生錯誤' })
  }
}

export const deleteOrder = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  try {
    let result = await order.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await order.findByIdAndDelete(req.params.id)
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const editOrder = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }
  try {
    let result = await order.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await order.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
      // console.log(result.user)
    }
  }
}
