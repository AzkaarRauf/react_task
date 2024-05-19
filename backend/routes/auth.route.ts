import { Router } from 'express'
import * as authController from '../controllers/auth.controller'
import { authMiddleware as authMiddleware } from '../middleware/auth.middleware'

const authRouter = Router()

authRouter.post('/login', authController.login)
authRouter.get('/isLoggedIn', authMiddleware, authController.isLoggedIn)
authRouter.post('/register', authController.register)

export default authRouter
