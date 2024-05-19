import ServerlessHttp from 'serverless-http'
import app from '../app'

app.get('/healthcheck', (req, res) => res.send('OK'))

module.exports.handler = ServerlessHttp(app)
