import React, { Component } from 'react'

import {Button} from 'react-bootstrap';
import '../App.css';

export default class Todo extends Component {

    getStyle() {
        return {
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    getStyle2 = () => {
       return this.props.todo.completed ? 'primary' : 'success';
    }
    
    render() {
        
        const id = this.props.todo.id;
        const title = this.props.todo.title;

        return (
            <div id = "todoItemdiv">
                <div id = "smallTodo">
                <input type = "checkbox" onChange = 
                {this.props.onChange.bind(this, id)} className = "mr-2" />
                <span style = {this.getStyle()}>{title}</span>
                </div>
                <Button variant = "outline-danger"
                    onClick=
                    {this.props.delTodo.bind(this, id)} >X</Button>
            </div>
        );
    }
}
