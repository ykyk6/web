import express from 'express'
import { createUser, loginUser, logoutUser, editUser, getUser, heartbeat } from '../controller/users.js'

const router = express.Router()

router.post('/', createUser)

router.post('/login', loginUser)

router.delete('/logout', logoutUser)

router.patch('/:id', editUser)

router.get('/', getUser)

router.get('/heartbeat', heartbeat)

export default router
