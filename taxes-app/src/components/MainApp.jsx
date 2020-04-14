import React, { Component } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent'
import '../css/form.css'

class MainApp extends Component {
    constructor(props) {
        super();
        this.state = {
            displayTable: false
        }
    }

    displayTable = () => {
        this.setState({
            displayTable: true
        })
    }

    render() {
        return (
            <div id="mainComponent">
                <FormComponent
                    submitPress={this.displayTable}
                >
                </FormComponent>
                <br />
                {this.state.displayTable &&
                    <TableComponent>
                    </TableComponent>
                }
            </div>
        );
    }
}

export default MainApp;