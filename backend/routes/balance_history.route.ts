import { Router } from 'express'
import * as balanceHistoryController from '../controllers/balance_history.controller'
import { authMiddleware } from '../middleware/auth.middleware'

const balanceHistoryRouter = Router()

balanceHistoryRouter.use(authMiddleware)

balanceHistoryRouter.get('/', balanceHistoryController.getBalanceHistory)
balanceHistoryRouter.post('/', balanceHistoryController.addBalanceHistory)

export default balanceHistoryRouter
