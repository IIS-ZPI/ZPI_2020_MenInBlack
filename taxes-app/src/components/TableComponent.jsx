import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'state',
    text: 'State'
}, {
    dataField: 'tax',
    text: 'tax (in %)'
}, {
    dataField: 'netto',
    text: 'Netto price'
}, {
    dataField: 'margin',
    text: 'tax (in $)'
}];

class TableComponent extends Component {

    constructor(props) {
        super();
        this.state = {}
    }
    render() {
        return (
            <div>
                <BootstrapTable keyField='id' data={this.props.tableData} columns={columns} />
            </div>
        );
    }
}

export default TableComponent;