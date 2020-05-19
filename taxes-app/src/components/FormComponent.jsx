import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const categoriesApi = "http://localhost:4000/products"

class FormComponent extends Component {

    constructor() {
        super();
        this.state = {
            amount: "00.00",
            products: [],
            category: "preparedFood",
            product: "apple",
            quantity: "10"
        };
    }

    componentDidMount = () => {
        fetch(categoriesApi)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    })
                });
    }

    onAmountChange = (newValue) => {
        this.setState({
            ...this.state,
            amount: newValue.target.value
        })
        this.props.amountChange(newValue.target.value);
    }

    fetchQuantity = () => {
        return this.state.products.find(product => product.name === this.state.product).quantity
    }

    onProductChange = (newProduct) => {
        let { options, selectedIndex } = newProduct.target
        this.setState({
            ...this.state,
            category: newProduct.target.value,
            product: options[selectedIndex].innerHTML,
            quantity: this.fetchQuantity()
        })
        this.props.categoryChange(newProduct.target.value);
    }

    validate = () => {
        var regex = /^\d+(?:\.\d{0,2})$/;
        return !!!regex.test(this.state.amount)
    }

    render() {
        return (
            <div id="formComponent">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select item category</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">{this.state.category} | {this.state.quantity}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                onChange={this.onProductChange}
                            >
                                {
                                    this.state.products.map((option, index) => {
                                        return (<option key={index} value={option.category}>{option.name}</option>)
                                    })
                                }
                            </Form.Control>
                        </InputGroup>
                    </Form.Group>

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

                    <Button
                        variant="primary"
                        type="button"
                        onClick={this.props.submitPress}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormComponent;