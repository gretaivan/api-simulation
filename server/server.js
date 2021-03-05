const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//entry view
app.get('/', (req, res) => {
    res.send('Welcome to the API for payment data simulation!');
});

app.post('/', (req, res) => {
    res.status(405).send('Right now we do not allow to add the data to the root!');
});

//RESTful views





module.exports = app;