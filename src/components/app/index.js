import React, { Component } from 'react'
import InputToDo from '../input-todo'
import ListToDo from '../list-todo'
import FilterToDo from '../filter-todo'
import './style.css'
class App extends Component {
  render() {
    return (
      <div className='container'>
          <FilterToDo/>
          <InputToDo/>
          <ListToDo/>
      </div>
    )
  }
}


export default App
