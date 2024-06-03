import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    if (input.trim() === "") {
      toast.error("Please enter an item");
    } else {
      this.setState({
        items: [...this.state.items, input],
        input: "",
      });
      toast.success("Item added successfully");
    }
  };

  deleteItems = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  editItem = (index) => {
    
  };

  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <ToastContainer />
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
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <div className="icons">
                <i
                  className="fas fa-edit"
                  onClick={() => this.editItem(index)}
                ></i>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.deleteItems(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
