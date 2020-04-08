import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';
import '../App.css';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
        }
    }
    
    onChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title : ''
        })
    }
    
    render() {
        return (
          <Form onSubmit={this.onSubmit} className = "mb-5">
            <Form.Group>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.onChange}
              name="title_input"
              placeholder = "Enter Todo Item"
                    />
            <Form.Text className = "text-muted">
                This Todo item will be marked not completed by default.
            </Form.Text></Form.Group>
            <Form.Group id = 'form-action'>
                <Button type = "submit" variant = "primary">Submit</Button>
            </Form.Group>
            <hr />
          </Form>
        );
    }
}
