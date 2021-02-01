import express from 'express'
import { ordercreate, getOrder, deleteOrder, editOrder } from '../controller/order.js'

const router = express.Router()

router.post('/', ordercreate)
router.get('/', getOrder)
router.patch('/:id', editOrder)
router.delete('/:id', deleteOrder)

export default router
