import React, {Component} from 'react';
import Todo from './Todo';

class Todos extends Component {

  render() {

    let todoItems = '';

    if (this.props.todos) {

      // The map() method creates a new array with the results of calling a provided function on every element in the calling array.
      // Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      todoItems = this.props.todos.map(todo => {
        return (<Todo id={todo.id} name={todo.name}></Todo>)
        // return (<li id={todo.id}>{todo.name}</li>)
      });
    }

    return (<ul class="todos">{todoItems}</ul>);
  }
}

export default Todos;
