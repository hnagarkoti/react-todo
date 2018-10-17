import React, { Component } from 'react';
import './App.css';

class TodoItems extends Component {
  createTasks(item){
    return (
      <li key={item.key}>
        {item.text}
        <span className="close" onClick={() => this.props.deleteTask(item.key)}>&#x2717;</span>
        <span className="completed" onClick={() => this.props.completeTask(item.key)}>&#9989;</span>
      </li>
    )
  }
  render(){
    const todoEntries = this.props.entries;
    return(
      <ul className="theList">
        {
            todoEntries.map((item) => this.createTasks(item))
        }
      </ul>
    );
  }
}

export default TodoItems;
