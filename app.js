var express = require('express')
const schedule = require('node-schedule')
const { requisicao, send } = require('./fluxo.js')
const moment = require('moment')
var port = process.env.PORT || 3000
var app = express();

schedule.scheduleJob('*/5 * * * *', async () => {
    const x = await requisicao()
    // SoldOutOnline
    // InStock
    // if (x.overview.caAvailability.shipping.status === 'InStock') {
      await send()
    // }
    // console.log('Status: ' + x.overview.caAvailability.shipping.status + ' ' + moment().format('YYYY-MM-DD HH:mm:ss'))
})