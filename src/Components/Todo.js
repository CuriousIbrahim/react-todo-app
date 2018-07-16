import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Todo.css';

class Todo extends Component {

  delete(id) {
    console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (<ReactCSSTransitionGroup transitonName="todo-animation" trasnitionEnterTimeout={500} transitionLeaveTimeout={700}>
      <li onClick={this.delete.bind(this, this.props.id)} class="todo" id={this.props.id}>
        {this.props.name}
      </li>
    </ReactCSSTransitionGroup>)
  }
}

export default Todo;
