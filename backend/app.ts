import express from 'express'
import cors from 'cors'
import errorHandler from './middleware/error_handler'
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

// Register error handler
app.use(errorHandler)

app.listen(8090, () => {
    console.log('Server is running on http://localhost:8090')
})