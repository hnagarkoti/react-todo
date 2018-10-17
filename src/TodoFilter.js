import React, { Component } from 'react';
import './index.css';

const TodoFilter = (props) => {
  return(
    <div>
      <button type="button" className="filterButton">All</button>
      <button type="button" className="filterButton">Active</button>
      <button type="button" className="filterButton" onClick={() => props.showCompletedTask()}>Completed</button>
    </div>
  )
}

export default TodoFilter;
