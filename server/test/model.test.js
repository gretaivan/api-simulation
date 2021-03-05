// import data
const { TestScheduler } = require('@jest/core');
const paymentData = require('../data');
// import model
const Payment = require('../models/paymentModel');

describe('Payment model', () => {
    const testPayment = {
        "id": "po_1IRc0NFYnBLVWstaKDPihS5n",
        "object": "payout",
        "amount": 1100,
        "arrival_date": 1614944379,
        "automatic": true,
        "balance_transaction": "txn_1I5HZuFYnBLVWstaSMMjOp5L",
        "created": 1614944379,
        "currency": "gbp",
        "description": "STRIPE PAYOUT",
        "destination": "ba_1IRc0NFYnBLVWstaX4V2uRC6",
        "failure_balance_transaction": null,
        "failure_code": null,
        "failure_message": null,
        "livemode": false,
        "metadata": {},
        "method": "standard",
        "original_payout": null,
        "reversed_by": null,
        "source_type": "card",
        "statement_descriptor": null,
        "status": "in_transit",
        "type": "bank_account"
      }

    //get all payments
    test('return all payments', () => {
        const payments = Payment.getAll; 
        expect(payments).toEqual(paymentData)
    });


    //get get one of them amount

    //add new payment

    //delete
    test('delete a most recently done payment', () => {
        const payment = paymentData[paymentData.length - 1]; 
        payment.delete(); 

        //perhaps check the payment that is about to be deleted data too?? 
        expect(paymentData).not.toContain(payment); 
    });


});