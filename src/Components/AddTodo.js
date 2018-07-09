import React, {Component} from 'react';

class AddTodo extends Component {

  render() {
    return (<div>
      {/* <h2>Add Todo</h2> */}
      <form>
        <input type="text" placeholder="Enter Item"></input>
        <button>Add</button>
      </form>
    </div>)
  }
}
export default AddTodo;
