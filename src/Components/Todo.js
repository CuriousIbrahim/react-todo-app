import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Todo.css";

class Todo extends Component {
  delete(id) {
    console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="todo-anim"
        transitionEnterTimeout={700}
        transitionLeave={700}
      >
        <li
          onClick={this.delete.bind(this, this.props.id)}
          className="todo"
          id={this.props.id}
        >
          {this.props.name}
        </li>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Todo;
