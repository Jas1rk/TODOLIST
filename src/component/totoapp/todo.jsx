import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        <form className="input-section">
          <h1>TODO APP</h1>
          <input type="text" placeholder="Enter items" />
        </form>
        <ul>
        <li>items <i className="fas fa-trash-alt"></i></li>
          <li>items <i className="fas fa-trash-alt"></i></li>
        </ul>
      </div>
    );
  }
}

export default Todo;
