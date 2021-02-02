import multer from 'multer'
import dotenv from 'dotenv'
import FTPStorage from 'multer-ftp'
import axios from 'axios'
import path from 'path'
import fs from 'fs'

import products from '../models/products.js'
dotenv.config()
let storage

// 本機開發，檔案存電腦
// 雲端環境，檔案存 FTP
if (process.env.DEV === 'true') {
  storage = multer.diskStorage({
  // 存取位置
    destination (req, file, callback) {
      callback(null, 'images/')
    },
    // 存取檔名
    filename (req, file, callback) {
      callback(null, Date.now() + path.extname(file.originalname))
    }
  })
} else {
  storage = new FTPStorage({
    ftp: {
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    },
    destination (req, file, options, callback) {
      callback(null, '/' + Date.now() + path.extname(file.originalname))
    }
  })
}
// 設定 upload 的詳細
const upload = multer({
  storage,
  fileFilter (req, file, callback) {
    if (!file.mimetype.includes('image')) {
      callback(new multer.MulterError('LIMIT_FORMAT'), false)
    } else {
      callback(null, true)
    }
  },
  limits: {
    fileSize: 1024 * 1024
  }
})
export const create = async (req, res) => {
  console.log(req.session.user)
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }

  upload.fields([{ name: 'image', maxCount: 2 }, { name: 'contentimage', maxCount: 3 }])(req, res, async error => {
    if (error instanceof multer.MulterError) {
      let message = ''
      if (error.code === 'LIMIT_FILE_SIZE') {
        message = '檔案太大'
      } else if (error.code === 'LIMIT_FORMAT') {
        message = '格式不符'
      } else {
        message = '上傳錯誤'
      }
      res.status(400).send({ success: false, message })
    } else if (error) {
      res.status(500).send({ success: false, messsage: '伺服器錯誤' })
    } else {
      try {
        let image = []
        let contentimage = []
        if (process.env.DEV === 'true') {
          image = req.files.image.map(function (item, index, array) {
            return item.filename
          }).toString()
          contentimage = req.files.contentimage.map(function (item, index, array) {
            return item.filename
          }).toString()
          // console.log(file2)
          // console.log(typeof file)
          console.log(image)
          console.log(contentimage)
        } else {
          image = req.files.image.map(function (item, index, array) {
            return path.basename(item.path)
          }).toString()
          contentimage = req.files.contentimage.map(function (item, index, array) {
            return path.basename(item.path)
          }).toString()
        }
        const result = await products.create({
          user: req.session.user._id,
          title: req.body.title,
          lorem: req.body.lorem,
          price: req.body.price,
          quantity: req.body.quantity,
          category: req.body.category,
          description: req.body.description,
          image,
          contentimage
        })
        res.status(200).send({ success: true, message: '', result })
        // console.log(req.body)
      } catch (error) {
        if (error.name === 'ValidationError') {
          const key = Object.keys(error.errors)[0]
          const message = error.errors[key].message
          res.status(400).send({ success: false, message })
        } else {
          console.log(error)
          res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
      }
    }
  })
}
export const edit = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }
  try {
    let result = await products.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await products.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'ValidatinError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
      // console.log(result.user)
    }
  }
}
export const deletee = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  try {
    let result = await products.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await products.findByIdAndDelete(req.params.id)
      res.status(200).send({ success: true, message: '', result })
      // 刪除本機圖片檔
      if (process.env.DEV === 'true') {
        fs.unlink('images/' + result.image, () => {})
        fs.unlink('images/' + result.contentimage, () => {})
      }
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}
export const user = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ succeess: false, messge: '未登入' })
    return
  }
  if (req.session.user._id !== req.params.user) {
    res.status(403).send({ suceess: false, message: '沒有權限' })
    return
  }
  try {
    const result = await products.find({ user: req.params.user })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const file = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  // 開發環境回傳本機圖片
  if (process.env.DEV === 'true') {
    const path = process.cwd() + '/images/' + req.params.file
    const exists = fs.existsSync(path)

    if (exists) {
      res.status(200).sendFile(path)
    } else {
      res.status(404).send({ success: false, message: '找不到圖片' })
    }
  } else {
    axios({
      method: 'Get',
      url: 'http://' + process.env.FTP_HOST + '/' + process.env.FTP_USER + '/' + req.params.file,
      responseType: 'stream'
    }).then(ress => {
      ress.data.pipe(res)
    }).catch(error => {
      res.status(error.response.status).send({ success: false, message: '取得圖片失敗' })
    })
  }
}
export const getProducts = async (req, res) => {
  try {
    const result = await products.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '發生錯誤' })
  }
}
