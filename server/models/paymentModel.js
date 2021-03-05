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
<<<<<<< HEAD

    static get getAll(){
        const payments = data.map((p) => new Payment(p));
        return payments; 
    }

    getAmount(id) {
=======
    static getAll(){
        const payments = data.map( p => new Payment(p))
        return payments; 
    }
 getAmount(id) {
>>>>>>> 59cc5cc5b6cc3cd86c794ba7c627ff9c201638f9
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
<<<<<<< HEAD
=======


>>>>>>> 59cc5cc5b6cc3cd86c794ba7c627ff9c201638f9
}



   
module.exports = Payment;
<<<<<<< HEAD
    

    
=======
>>>>>>> 59cc5cc5b6cc3cd86c794ba7c627ff9c201638f9
