const { requisicao, send } = require('./fluxo.js')
const moment = require('moment')
const logger = require('heroku-logger')

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
