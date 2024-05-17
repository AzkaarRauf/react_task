import express from 'express'
import cors from 'cors'
import errorHandler from './middleware/error_handler'
import SqlHandler from './shared/sql_handler.shared'
import authRouter from './routes/auth.route'

const app = express()

// Add cors middleware
app.use(cors())

// Add json middleware
app.use(express.json())
// Add urlencoded middleware
app.use(express.urlencoded({ extended: true }))

// Register routes
app.use('/auth', authRouter)

app.get('/no-error', (req, res, next) => {
    res.send('No error')
    console.log('No error')
})

app.use(errorHandler)

app.listen(8090, () => {
    console.log('Server is running on http://localhost:8090')
})