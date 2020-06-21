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
    let products = [
        {
            "name": "apple",
            "category": "groceries",
            "quantity": 10
        },
        {
            "name": "orange",
            "category": "groceries",
            "quantity": 15
        },
        {
            "name": "pineapple",
            "category": "groceries",
            "quantity": 20
        },
        {
            "name": "tomato",
            "category": "groceries",
            "quantity": 50
        },
        {
            "name": "bread",
            "category": "groceries",
            "quantity": 0
        },
        {
            "name": "soda",
            "category": "groceries",
            "quantity": 100
        },
        {
            "name": "cereal",
            "category": "groceries",
            "quantity": 7
        },
        {
            "name": "milk",
            "category": "groceries",
            "quantity": 10
        },
        {
            "name": "rice",
            "category": "groceries",
            "quantity": 10
        },
        {
            "name": "maize",
            "category": "groceries",
            "quantity": 15
        },
        {
            "name": "wheat",
            "category": "groceries",
            "quantity": 14
        },
        {
            "name": "cheese",
            "category": "preparedFood",
            "quantity": 13
        },
        {
            "name": "cheeseburger",
            "category": "preparedFood",
            "quantity": 12
        },
        {
            "name": "sandwich",
            "category": "preparedFood",
            "quantity": 10
        },
        {
            "name": "chicken salad",
            "category": "preparedFood",
            "quantity": 18
        },
        {
            "name": "lobster",
            "category": "preparedFood",
            "quantity": 11
        },
        {
            "name": "ramen",
            "category": "preparedFood",
            "quantity": 1000
        },
        {
            "name": "tomato puree",
            "category": "preparedFood",
            "quantity": 80
        },
        {
            "name": "canned beans",
            "category": "preparedFood",
            "quantity": 16
        },
        {
            "name": "xanax",
            "category": "prescriptionDrug",
            "quantity": 11
        },
        {
            "name": "morphine",
            "category": "prescriptionDrug",
            "quantity": 12
        },
        {
            "name": "vicodin",
            "category": "prescriptionDrug",
            "quantity": 13
        },
        {
            "name": "simvastatin",
            "category": "prescriptionDrug",
            "quantity": 14
        },
        {
            "name": "Lisinopril",
            "category": "prescriptionDrug",
            "quantity": 15
        },
        {
            "name": "Levothyroxine",
            "category": "prescriptionDrug",
            "quantity": 16
        },
        {
            "name": "Azithromycin",
            "category": "prescriptionDrug",
            "quantity": 17
        },
        {
            "name": "LMetformin",
            "category": "prescriptionDrug",
            "quantity": 18
        },
        {
            "name": "gripex",
            "category": "nonPrescriptionDrug",
            "quantity": 19
        },
        {
            "name": "Dextromethorphan",
            "category": "nonPrescriptionDrug",
            "quantity": 20
        },
        {
            "name": "advil",
            "category": "nonPrescriptionDrug",
            "quantity": 10
        },
        {
            "name": "aleve",
            "category": "nonPrescriptionDrug",
            "quantity": 10
        },
        {
            "name": "dulcolax",
            "category": "nonPrescriptionDrug",
            "quantity": 10
        },
        {
            "name": "cepacol",
            "category": "nonPrescriptionDrug",
            "quantity": 10
        },
        {
            "name": "cortaid",
            "category": "nonPrescriptionDrug",
            "quantity": 10
        },
        {
            "name": "colace",
            "category": "nonPrescriptionDrug",
            "quantity": 10
        },
        {
            "name": "t-shirt",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "shirt",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "dress",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "jumper",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "jacket",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "jeans",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "suit",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "tie",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "hat",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "coat",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "sweatshirt",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "blouse",
            "category": "clothing",
            "quantity": 10
        },
        {
            "name": "program",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "mobile app",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "patent",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "life insurance",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "security investment",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "digital music",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "program",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "customer list",
            "category": "intangibles",
            "quantity": 10
        },
        {
            "name": "program",
            "category": "intangibles",
            "quantity": 10
        }
    ];

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
        },
        "Arkansas": {
            "base": "0.065",
            "groceries": "0.0125",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "California": {
            "base": "0.0725",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Colorado": {
            "base": "0.029",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Connecticut": {
            "base": "0.0635",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.01"
        },
        "District of Columbia": {
            "base": "0.0575",
            "groceries": "0.00",
            "preparedFood": "0.10",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Florida": {
            "base": "0.06",
            "groceries": "0.00",
            "preparedFood": "0.09",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Georgia": {
            "base": "0.04",
            "groceries": "0.04",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Guam": {
            "base": "0.04",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Hawaii": {
            "base": "0.04166",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Idaho": {
            "base": "0.06",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Illinois": {
            "base": "0.0625",
            "groceries": "0.01",
            "preparedFood": "0.0825",
            "prescriptionDrug": "0.01",
            "nonPrescriptionDrug": "0.01",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Indiana": {
            "base": "0.07",
            "groceries": "0.00",
            "preparedFood": "0.09",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Iowa": {
            "base": "0.06",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Kansas": {
            "base": "0.065",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Kentucky": {
            "base": "0.06",
            "groceries": "0.00",
            "preparedFood": "0.00",
            "prescriptionDrug": "0.00",
            "nonPrescriptionDrug": "0.00",
            "clothing": "0.00",
            "intangibles": "0.00"
        },
        "Louisiana": {
            "base": "0.0445",
            "groceries": "0.07",
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