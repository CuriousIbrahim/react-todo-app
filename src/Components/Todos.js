import React, {Component} from 'react';
import Todo from './Todo';

class Todos extends Component {

  delete(id) {
    this.props.onDelete(id);
  }

  render() {

    let todoItems = '';

    if (this.props.todos) {

      // The map() method creates a new array with the results of calling a provided function on every element in the calling array.
      // Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      todoItems = this.props.todos.map(todo => {
        return (<Todo id={todo.id} name={todo.name} onDelete={this.props.onDelete.bind(this)}></Todo>)
      });
    }

    return (<ul class="todos" onDelete={this.props.onDelete.bind(this)}>{todoItems}</ul>);
  }
}

export default Todos;
