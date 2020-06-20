import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios'

const columns = [{
    dataField: 'currency',
    text: 'currency'
}, {
    dataField: 'rate',
    text: 'rate'
}, {
    dataField: 'price',
    text: 'price'
}];

const ratesAPI = "https://finnhub.io/api/v1/forex/rates"
const apiToken = "brn1mtfrh5rf0nlm52t0"
const baseCurrency = "USD"

class componentName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            tableData: []
        }
    }

    onHide = () => {
        this.setState({
            show: false
        })
    }

    onShow = () => {
        this.setState({
            show: true
        })
    }

    fetchRates = () => {
        axios.get(ratesAPI, {
            params: {
                token: apiToken,
                base: baseCurrency
            }
        }).then(response => {
            this.prepareData(response.data.quote);
        })
    }

    prepareData = (rates) => {
        let data = Object.entries(rates);
        let results = []

        data.forEach(elem => results.push({
            currency: elem[0],
            rate: Number(elem[1]).toFixed(2),
            price: this.countPrice(this.props.price, elem[1])
        }));

        console.log(results);

        this.setState({
            tableData: results,
            show: true
        })
    }

    countPrice = (initialPrice, rate) => {
        return Number(initialPrice * rate).toFixed(2);
    }

    render() {
        return (
            <div>
                <Button
                    onClick={() => this.fetchRates()}
                    variant="danger"
                >
                    International prices
                    </Button>
                <Modal show={this.state.show} onHide={this.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>European prices for ${this.props.price}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BootstrapTable keyField='id' data={this.state.tableData} columns={columns} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default componentName;