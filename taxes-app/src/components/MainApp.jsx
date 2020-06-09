import React, { Component } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent'
import '../css/form.css'

const statesApi = "http://localhost:4000/states"

class MainApp extends Component {
    constructor(props) {
        super();
        this.state = {
            displayTable: false,
            category: "groceries",
            amount: "0.00",
            data: []
        }
    }

    displayTable = () => {
        this.constructTableData();

        this.setState({
            displayTable: true
        })
    }

    hideTable = () => {
        this.setState({
            displayTable: false
        })
    }

    countNettoValue = (tax, desiredPrice) => {
        let divider = tax + 1;
        return this.formatPrice(desiredPrice / divider);
    }

    formatPrice = (number) => {
        return Number(number).toFixed(2);
    }

    constructTableData = () => {
        let iterator = 0;
        let resultsArray = [];
        let tempRecord;
        fetch(statesApi)
            .then(res => res.json())
            .then((
                result => {
                    for (var k in result) {
                        //get the tax in given state
                        let tax = +result[k][this.state.category] + +result[k].base;
                        //count netto prive
                        let nettoPrice = this.countNettoValue(tax, this.state.amount);
                        tempRecord = { id: iterator++, state: k, tax: tax + '%', netto: nettoPrice, margin: this.formatPrice(this.state.amount - nettoPrice) }
                        resultsArray.push(tempRecord);
                    };
                    this.setState({
                        data: resultsArray
                    })
                }
            ))
    }

    categoryChange = (category) => {
        this.setState({
            category
        })
    }

    amountChange = (amount) => {
        this.setState({
            amount
        })
    }

    render() {
        return (
            <div id="mainComponent">
                <FormComponent
                    hideTable={this.hideTable}
                    submitPress={this.displayTable}
                    categoryChange={this.categoryChange}
                    amountChange={this.amountChange}
                >
                </FormComponent>
                <br />
                {this.state.displayTable &&
                    <TableComponent
                        tableData={this.state.data}
                    >
                    </TableComponent>
                }
            </div>
        );
    }
}

export default MainApp;