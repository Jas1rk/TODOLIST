import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  state = {
    input: "",
    items: [],
  };

  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    

    this.setState({
      items: [...this.state.items , input]
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TODO APP</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleInput}
            placeholder="Enter items"
          />
        </form>
        <ul>
          <li>
            items <i className="fas fa-trash-alt"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
