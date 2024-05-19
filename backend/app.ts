import express from 'express'
import cors from 'cors'
import errorHandler from './middleware/error_handler'
import authRouter from './routes/auth.route'
import balanceHistoryRouter from './routes/balance_history.route'
import tokenRouter from './routes/token.route'
import activityRouter from './routes/activity.route'

const app = express()

// Add cors middleware
app.use(cors())

// Add json middleware
app.use(express.json())

// Add urlencoded middleware
app.use(express.urlencoded({ extended: true }))

// Register routes
app.use('/auth', authRouter)
app.use('/balance-history', balanceHistoryRouter)
app.use('/tokens', tokenRouter)
app.use('/activities', activityRouter)

// Register error handler
app.use(errorHandler)

app.listen(8090, () => {
    console.log('Server is running on http://localhost:8090')
})