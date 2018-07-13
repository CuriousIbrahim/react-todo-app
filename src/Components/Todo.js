import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {

  delete(id) {
    console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (<li onClick={this.delete.bind(this, this.props.id)} class="todo" id={this.props.id}>{this.props.name}
    </li>)
  }

}

export default Todo;
