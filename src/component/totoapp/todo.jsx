import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./todo.css";

class Todo extends Component {
  state = {
    input: "",
    items: [],
    editIndex: null,
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
    toast.success("Item deleted successfully");
  };

 

  editItem = (index) => {
    this.setState({
      editIndex: index,
      input: this.state.items[index],
    });
  };

  updateItem = () => {
    const { editIndex, input, items } = this.state;

    const updatedItems = [...items];
    updatedItems[editIndex] = input;
    this.setState({
      items: updatedItems,
      editIndex: null,
      input: "",
    });
    toast.success("Item Edited successfully");
  };

  cancelEdit = () => {
    this.setState({
      editIndex: null,
      input: "",
    });
  };

  render() {
    const { input, items, editIndex } = this.state;
    console.log(editIndex);
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
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={input}
                    onChange={this.handleInput}
                  />
                </div>
              ) : (
                data
              )}

              <div className="icons">
                {editIndex === index ? (
                  <>
                    <i className="fas fa-check" onClick={this.updateItem}></i>
                    <i
                      className="fas fa-window-close"
                      onClick={this.cancelEdit}
                    ></i>
                  </>
                ) : (
                  <i
                    className="fas fa-edit"
                    onClick={() => this.editItem(index)}
                  ></i>
                )}

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
