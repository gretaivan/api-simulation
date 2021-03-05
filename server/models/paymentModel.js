const data = require('../data')

class Payment {
    constructor(){
        this.id = data.id; 
        this.amount = data.amount; 
        this.arrivalDate = data.arrival_date;
        this.currency = data.currency; 
        this.created = data.created; 
        this.destination =data.destination; 
    }
    static getAll(){
        const payments = data.map( p => new Payment(p))
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

    }


}



   
module.exports = Payment;
