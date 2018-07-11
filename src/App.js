import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

const uuid = require('uuid/v1');

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      count: 0
    }
  }

  setTodos() {
    this.state.todos = [
      {
        id: uuid(),
        name: 'Eat breakfast'
      }, {
        id: uuid(),
        name: 'Buy groceries'
      }
    ]
  }

  deleteTodo(id) {
    let todos = this.state.todos;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice(i, 1);
        break;
      }
    }

    console.log(todos);

    this.setState({todos: todos});
  }

  addTodo(todo) {
    let todos = this.state.todos;

    console.log('App.js', todo);

    todos.push(todo);

    this.setState({todos: todos});
  }

  componentWillMount() {
    this.setTodos();
  }

  render() {

    // this.setTodos();

    return (<div className="App">
      <h1>React Todo App</h1>

      <AddTodo onAdd={this.addTodo.bind(this)}/>
      <Todos todos={this.state.todos} onDelete={this.deleteTodo.bind(this)}/>
    </div>);
  }
}

export default App;
