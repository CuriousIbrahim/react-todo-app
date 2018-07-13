import React, {Component} from 'react';
import './AddTodo.css';
const uuid = require('uuid/v1');

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      todo: {}
    }
  }

  onSubmit(e) {

    e.preventDefault();

    let text = this.todo.value;

    this.todo.value = '';

    if (text !== '') {

      this.setState({
        todo: {
          id: uuid(),
          name: text
        }
      }, () => {
        this.props.onAdd(this.state.todo);
      });
    } else {
      alert("You cannot enter an empty value.")
    }
    // console.log('AddTodo.js', this.state.todo);

  }

  render() {
    return (<div>
      {/* <h2>Add Todo</h2> */}
      <form onSubmit={this.onSubmit.bind(this)}>
        <input id="todo-input" type="text" placeholder="Enter Item" ref={(c) => this.todo = c}></input>
        <button id="add-btn">Add</button>
      </form>
    </div>)
  }
}
export default AddTodo;
