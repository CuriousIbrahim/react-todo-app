import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {

  delete(id) {
    console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (<li class="todo" id={this.props.id}>{this.props.name}
      <a onClick={this.delete.bind(this, this.props.id)} class='remove-btn' href='#'>X</a>
    </li>)
  }

}

export default Todo;
