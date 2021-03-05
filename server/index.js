const server = require('./server')

server.listen(3000, () => console.log(`\nExpress departing now from port 3000!\n`))


const Payment = require('./models/paymentModel')

console.log(Payment.getAll)