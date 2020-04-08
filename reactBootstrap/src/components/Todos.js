import React, { Component } from 'react';

import Todo from './Todo';

import {ListGroup} from 'react-bootstrap';

export default class Todos extends Component {
    
    render() {
        return (
            <ListGroup>
                {
                    this.props.todos.map((todo, index) => (
                    <ListGroup.Item variant = {index%2? "dark" : "light"} key = {todo.id}>
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onChange={this.props.onChange}
                            delTodo={this.props.delTodo} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        );
    }
}



