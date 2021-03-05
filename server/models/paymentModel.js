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



}

module.exports = Payment;