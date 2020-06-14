import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import validator from 'validator';

const categoriesApi = "http://localhost:4000/products"

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: "00.00",
            unadjustedPrice: "00.00",
            products: [],
            category: "preparedFood",
            product: "apple",
            quantity: "10",
            adjustPrice: true,
            isInputValid: false
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

    setPrice(price) {
        let quant = Number.parseInt(this.state.quantity);
        let adjustedPrice = Number.parseFloat(price);
        if (this.state.adjustPrice) {
            if (quant <= 10) {
                adjustedPrice = adjustedPrice * 1.95;
            }
            else {
                adjustedPrice = adjustedPrice * (1 + (0.05 + (100 - quant) * 0.01));
            }
        }
        return adjustedPrice;
    }

    onAmountChange = (newValue) => {
        let adjustedPrice = this.setPrice(newValue.target.value);
        this.setState({
            ...this.state,
            unadjustedPrice: newValue.target.value,
            amount: adjustedPrice.toString(),
            isInputValid: !validator.isCurrency(newValue.target.value, { digits_after_decimal: [1, 2] })
        })
        this.props.amountChange(adjustedPrice);
        this.props.hideTable();
    }

    fetchQuantity = () => {
        return this.state.products.find(product => product.name === this.state.product).quantity
    }

    setQuantity = () => {
        let quant = this.fetchQuantity();
        this.setState({
            ...this.state,
            quantity: quant,
            adjustPrice: Number.parseInt(quant) <= 100 ? true : false
        })
    }

    onProductChange = (newProduct) => {
        let { options, selectedIndex } = newProduct.target;
        let adjustedPrice = this.setPrice(this.state.unadjustedPrice);
        this.setState({
            ...this.state,
            amount: adjustedPrice,
            category: newProduct.target.value,
            product: options[selectedIndex].innerHTML,
        }, this.setQuantity)
        this.props.hideTable();
    }

    formatPrice = (number) => {
        return Number(number).toFixed(2);
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
                            step="0.10"
                            lang="en_EN"
                            placeholder={this.state.amount}
                            onChange={this.onAmountChange}
                            isInvalid={this.state.isInputValid}
                        />
                        <Form.Text className="text-muted">
                            In dollars (format xx.xx)
                        </Form.Text>
                        {this.state.adjustPrice &&
                            <Form.Text className="text-muted">
                                <strong>Price adjusted to {this.formatPrice(this.state.amount)} due to low quantity ({this.state.quantity})</strong>
                            </Form.Text>
                        }
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="button"
                        onClick={() => {
                            this.props.amountChange(this.state.amount);
                            this.setPrice(this.state.unadjustedPrice);
                            this.props.submitPress();
                        }
                    }
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormComponent;