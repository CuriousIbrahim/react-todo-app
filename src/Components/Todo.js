import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {

  render() {
    return (<li class="todo" id={this.props.id}>{this.props.name}
      <a class='remove-button' href='#'>X</a>
    </li>)
  }

}

export default Todo;
