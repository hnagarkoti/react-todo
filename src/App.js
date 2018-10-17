import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import TodoFilter from './TodoFilter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        isCompleted: false,
        isActive: true
      },
      currentSelectedFilter: 'all'
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.showCompletedTask = this.showCompletedTask.bind(this);
  }
  handleInput(e){
    console.log('Hello Input');
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    }
    this.setState({
      currentItem
    })
  }
  addItem(e){
    e.preventDefault()
    console.log('Hello World')
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  completeTask(key){
    console.log('Complete task', key);
    const filteredItems = this.state.items.filter(item => {
      if(item.key == key){
        item.isCompleted = !item.isCompleted
      }
      return item;
    });
    let that = this;
   this.setState({
     items: filteredItems
   })
  }
  showCompletedTask(){
    console.log('Show Completed Task');
    const completedItems = this.state.items.filter(item => {
      return item.isCompleted;
    })
    console.log('completedItems', completedItems);
  }
  render() {
    let that = this;
    let inputElement = React.createRef();
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteTask={this.deleteItem}
          completeTask={this.completeTask}
        />
        {
          this.state.items.length ? <TodoFilter
            showCompletedTask={that.showCompletedTask}
          /> : null
        }
      </div>
    );
  }
}

export default App;
