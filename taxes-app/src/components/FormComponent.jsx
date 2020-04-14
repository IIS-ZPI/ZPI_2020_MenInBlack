import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const categoriesApi = "http://localhost:4000/categories"

class FormComponent extends Component {

    constructor() {
        super();
        this.state = {
            amount: "00.00",
            categories: [],
            category: "groceries"
        };
    }

    componentDidMount = () => {
        fetch(categoriesApi)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        categories: result
                    })
                });
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