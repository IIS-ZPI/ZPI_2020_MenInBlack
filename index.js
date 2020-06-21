const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/products', (req, res) => {
    const count = 5;

    // Generate some passwords
    // const passwords = Array.from(Array(count).keys()).map(i =>
    //     generatePassword(12, false)
    // )
    let products = [{
        "name": "apple",
        "category": "groceries",
        "quantity": 10
    },
    {
        "name": "orange",
        "category": "groceries",
        "quantity": 15
    },]

    // Return them as json
    res.json(products);

    console.log(`Sent ${count} products`);
});

app.get('/states', (req, res) => {
    const count = 5;

    // Generate some passwords
    // const passwords = Array.from(Array(count).keys()).map(i =>
    //     generatePassword(12, false)
    // )
    let states = {
        "Alabama": {
            "base": "0.04",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Arizona": {
            "base": "0.056",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        }
    }

    // Return them as json
    res.json(states);

    console.log(`Sent ${count} states`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

const port = process.env.PORT || 4000;
app.listen(port);

console.log(`Password generator listening on ${port}`);