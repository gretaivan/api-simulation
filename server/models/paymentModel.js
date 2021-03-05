// const data = require('../data')

let data = [
    {
      "id": 1,
      "amount": 1100,
      "arrival_date": 1614944379,
      "created": 1614944379,
      "currency": "gbp",
      "destination": "ba_1IRc0NFYnBLVWstaX4V2uRC6"
    },
    {
      "id": 2,
      "amount": 100,
      "arrival_date": 1614944379,
      "automatic": true,
      "currency": "usd",
      "destination": "ba_1IRc0NFnOBLVWstaX4V2uRC6"
    },
    {
      "id": 3,
      "amount": 723,
      "arrival_date": 1614944379,
      "created": 1614944379,
      "currency": "gbp",
      "destination": "ba_1IRc0NFnOBLVWoQlX4V2uRC6"
    }
]

data = JSON.stringify(data)


class Payment {
    constructor(pData){
        this.id = pData.id;
        this.amount = pData.amount; 
        this.arrivalDate = pData.arrival_date;
        this.currency = pData.currency; 
        this.created = pData.created; 
        this.destination =pData.destination; 
    }
    static get getAll(){
        const payments = data
        console.log(payments)
        return payments; 
    }

 getAmount(id) {
        try {
            const paymentData = data.filter((payment) => payment.id === id)[0];
            const payment = new Payment(paymentData);
            return payment;
        } catch (err) {
            throw new Error('That transaction does not exist!');
        }
    }

    createPayment() {
        const id = data.length + 1;
        const payment = new Payment({
            id: id,
            amount: Math.random * 10000,
            arrivalDate: 1614944479,
            currency: 'gbp',
            created: 1614944379,
            destination: 'ba_1IRc0NFYnBLVWstaX4V2uRC6'
        });
        data.push(payment);
        return payment;
    }

    delete(id) {
        const payment = data.filter((p) => p.id === this.id)[0];
        data.splice(data.indexOf(data), 1)

    }
}
module.exports = Payment; 
