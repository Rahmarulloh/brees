import React from "react";
import Plus from "../images/plus";
import Options from "../images/Options";
import '../styles/todo.css';

type card = {
  url: string;
};

interface info {
  name: string;
  card?: card[];
}

export default class Todo extends React.Component<info> {
  render() {
    return (
      <div className="todo">
        <div className="todo-header d-flex align-items-center justify-space-between">
          <h2 className="todo-title">{this.props.name}</h2>

          <div className="todo-icons">
            <Plus/>
            <Options/>
          </div>
        </div>
      </div>
    );
  }
}
