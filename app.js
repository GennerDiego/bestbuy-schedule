var express = require('express')
const logger = require('heroku-logger')
var port = process.env.PORT || 3000
var app = express()

app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'World' }))
})
app.listen(port, function () {
  logger.info(`Aplicação em pé!`)
})
