import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.middleware'
import * as activityController from '../controllers/activity.controller'

const activityRouter = Router()

activityRouter.use(authMiddleware)

activityRouter.get('/recent', activityController.getRecent)

export default activityRouter
