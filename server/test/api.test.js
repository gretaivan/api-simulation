const request = require('supertest');
// import server
const server = require('../server');

describe('API server', () => {


    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });


    //get all payments check on status code 

    //get get one of them amount check on status code 

    //add new payment check on status code 

    //delete check on status code 

});
