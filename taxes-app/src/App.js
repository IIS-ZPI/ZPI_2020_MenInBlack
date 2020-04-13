import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group controlId="formDesiredAmount">
            <Form.Label>Desired buy price</Form.Label>
            <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Enter amount" />
            <Form.Text className="text-muted">
              In dollars (format xx.xx)
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select item category</Form.Label>
            <Form.Control as="select">
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
      </header>
    </div>
  );
}

export default App;
