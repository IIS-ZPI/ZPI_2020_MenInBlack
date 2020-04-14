import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'state',
    text: 'State'
}, {
    dataField: 'productCategory',
    text: 'Product category'
}, {
    dataField: 'netto',
    text: 'Sell for'
}, {
    dataField: 'margin',
    text: 'profit'
}];

class TableComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            products: [
                { state: 'alabama', productCategory: 'some', netto: '1.20', margin: '0.21' },
                { state: 'california', productCategory: 'someOne', netto: '1.50', margin: '0.31' }
            ]
        }
    }
    render() {
        return (
            <div>
                <BootstrapTable keyField='id' data={this.state.products} columns={columns} />
            </div>
        );
    }
}

export default TableComponent;