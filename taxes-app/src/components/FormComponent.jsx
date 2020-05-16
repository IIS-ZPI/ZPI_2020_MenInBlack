import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

const productsApi = "http://localhost:4000/products"
const categoriesApi = "http://localhost:4000/categories"

class FormComponent extends Component {

    constructor() {
        super();
        this.state = {
            amount: "00.00",
            products: [],
            categories: [],
            category: "groceries"
        };
    }

    componentDidMount = () => {
        fetch(productsApi)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    })
                });

        fetch(categoriesApi)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        categories: result
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

    onProductChange = (newProduct) => {
        this.setState({
            ...this.state,
            category: newProduct.target.value
        })
        this.props.categoryChange(newProduct.target.value);
    }

    onCategoryChange = (newCategory) => {
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
            <div id="formComponent">
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
                        <InputGroup>
                            <Form.Control
                                as="select"
                                onChange={this.onCategoryChange}
                            >
                                {
                                    this.state.categories.map((option, index) => {
                                        return (<option key={index} value={option}>{option}</option>)
                                    })
                                }
                            </Form.Control>
                            <Form.Control
                                as="select"
                                onChange={this.onProductChange}
                            >
                                {
                                    this.state.products.map((option, index) => {
                                        if (option.category === this.state.category)
                                            return (<option key={index} value={option.category}>{option.name}</option>)
                                    })
                                }
                            </Form.Control>
                        </InputGroup>
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