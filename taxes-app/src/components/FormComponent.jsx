import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormComponent extends Component {

    constructor() {
        super();
        this.state = {
            amount: "00.00",
            category: 1
        };
    }

    onAmountChange = (newValue) => {
        console.log(newValue.target.value);
        this.setState({
            ...this.state,
            amount: newValue.target.value
        })
    }

    onCategoryChange = (newCategory) => {
        console.log(newCategory.target.value);
        this.setState({
            ...this.state,
            category: newCategory.target.value
        })
    }

    validate = () => {
        var regex = /^\d+(?:\.\d{0,2})$/;
        return !!!regex.test(this.state.amount)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formDesiredAmount">
                        <Form.Label>Desired buy price</Form.Label>
                        <Form.Control
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            lang="en_EN"
                            placeholder={this.state.amount}
                            onChange={this.onAmountChange}
                            isInvalid={this.validate()}
                        />
                        <Form.Text className="text-muted">
                            In dollars (format xx.xx)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select item category</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={this.onCategoryChange}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormComponent;