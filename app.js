var express = require('express')
// const schedule = require('node-schedule')
const { requisicao, send } = require('./fluxo.js')
const moment = require('moment')
const logger = require('heroku-logger')
var port = process.env.PORT || 3000
var app = express()

app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'World' }))
})
app.listen(port, function () {
  logger.info(`Aplicação em pé!`)
})

const run = async () => {
  const x = await requisicao()
  // SoldOutOnline
  // InStock
  if (x.overview.caAvailability.shipping.status === 'InStock') {
    await send()
  }
  logger.info('Status: ' + x.overview.caAvailability.shipping.status + ' ' + moment().utcOffset(-2).format('YYYY-MM-DD HH:mm:ss'))
}

run()
// schedule.scheduleJob('*/5 * * * *', async () => {
//   const x = await requisicao()
//   // SoldOutOnline
//   // InStock
//   if (x.overview.caAvailability.shipping.status === 'InStock') {
//     await send()
//   }
//   logger.info('Status: ' + x.overview.caAvailability.shipping.status + ' ' + moment().format('YYYY-MM-DD HH:mm:ss'))
// })
