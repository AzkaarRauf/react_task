import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware'
import * as tokenController from '../controllers/token.controller'

const tokenRouter = Router()

tokenRouter.use(authMiddleware)

tokenRouter.get('/top-tokens', tokenController.getTopTokens)
tokenRouter.get('/greed-index', tokenController.getGreedIndex)

export default tokenRouter
