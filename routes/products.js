import express from 'express'
import { create, getProducts, edit, deletee, user, file } from '../controller/products.js'

const router = express.Router()

router.post('/', create)
router.get('/', getProducts)
router.patch('/:id', edit)
router.delete('/:id', deletee)
router.get('/user/:user', user)
router.get('/file/:file', file)

export default router
