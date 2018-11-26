const request = require('request-promise')
const nodemailer = require('nodemailer')

const options = {
  uri: 'https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/13208347?lang=fr',
  json: true
}

const requisicao = () => request.get(options)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gennerdiego@gmail.com',
    pass: 'qtkjarvhfaaiwypu'
  }
})

var mailOptions = {
  from: 'gennerdiego@gmail.com',
  to: 'gennerdiego@gmail.com',
  subject: 'JOGO EM ESTOQUE',
  text: 'https://www.bestbuy.ca/en-ca/category/nintendo-switch-consoles/3457140.aspx?'
}

const send = () => transporter.sendMail(mailOptions)

module.exports = {
  requisicao,
  send
}
