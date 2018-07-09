import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  setTodos() {
    this.state.todos = [
      {
        id: 1,
        name: 'Eat breakfast'
      }, {
        id: 2,
        name: 'Buy groceries'
      }
    ]
  }

  render() {

    this.setTodos();

    return (<div className="App">
      <h1>React Todo App</h1>
      <Todos todos={this.state.todos}></Todos>
    </div>);
  }
}

export default App;
