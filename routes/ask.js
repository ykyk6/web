import express from 'express'
import { Askcreate, getAsk, deleteAsk, editAsk } from '../controller/ask.js'

const router = express.Router()

router.post('/', Askcreate)
router.get('/', getAsk)
router.patch('/:id', editAsk)
router.delete('/:id', deleteAsk)

export default router
