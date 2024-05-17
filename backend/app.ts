import express from 'express'
import cors from 'cors'
import errorHandler from './middleware/error_handler'
import SqlHandler from './helpers/sql_handler'

const app = express()

// Add cors middleware
app.use(cors())

app.get('/', async (req, res, next) => {
    const sql = new SqlHandler()

    sql.query = 'SELECT * FROM users'

    const data = await sql.getOne([])

    res.json(data)
})

app.get('/no-error', (req, res, next) => {
    res.send('No error')
    console.log('No error')
})

app.use(errorHandler)

app.listen(8090, () => {
    console.log('Server is running on http://localhost:8090')
})