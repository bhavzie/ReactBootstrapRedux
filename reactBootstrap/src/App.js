import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import Todos from './components/Todos';
import Header from './components/Header';
import About from './About';
import AddTodo from './components/AddTodo';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
   constructor(props) {
        super(props);
        this.state = {
            todos : [],
        }
    }

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => response.json())
            .then(todos => {
              this.setState({
                todos,
              });
            }
            );
    }

    onChange = (id, e) => {
      this.setState(
        {
          todos : this.state.todos.map(todo => {
            if(todo.id === id)
              todo.completed = !todo.completed
            return todo;
          })  
        }
      );
    }

    delTodo = (id, e) => {
      this.setState(
        {
            todos : this.state.todos.filter(todo => {
              return todo.id !== id;
            })
        }
      );
    }

    addTodo = (title) => {
      const newTodo = {
        id : this.state.todos.length + 1,
        title : title,
        completed : false,
      }

      this.setState({
        todos : [...this.state.todos, newTodo]
      });
    }
  
  
  render() {
    return (
      <Router>
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <div className="container">
                <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    onChange={this.onChange}
                    delTodo={this.delTodo}
                  />
              </div>
            </React.Fragment>
          )}
        />
        <Route path="/about">
          <About />
        </Route>
      </Router>
    );
  }
}
