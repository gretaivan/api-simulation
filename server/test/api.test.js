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
        console.log('Stopping test server');
        api.close(done);
    });

 test('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });


    //get all payments check on status code 

    //get get one of them amount check on status code 

    //add new payment check on status code 

    //delete check on status code 

});
