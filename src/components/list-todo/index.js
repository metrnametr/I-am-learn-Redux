import React, { Component } from 'react'
import ItemToDo from '../item-todo'
import { connect } from 'react-redux'
class ListTodo extends Component {
  render() {
      
      console.log(this.props)
    return (
      <div>
          <ul className='list-group'>
            {this.body()}
          </ul>
      </div>
    )
  }

  body = () => {
    const { todo } = this.props.lists
    const { filterType } = this.props.filterItem
    switch(filterType){
        case 'ALL': return todo.map( item => <ItemToDo key={item.id} item={item}/>)
        case 'TODO':{
          return todo.filter(item => !item.completed).map( item => <ItemToDo key={item.id} item={item}/>)
        }
        case 'COMPLETED':{
          return todo.filter(item => item.completed).map( item => <ItemToDo key={item.id} item={item}/>)
        }
        default: return todo.map( item => <ItemToDo key={item.id} item={item}/>)
    }
  }
}

const mapStateToProps = (state) => ({
    lists: state.todoReducer,
    filterItem: state.filterReducer
})

export default connect(mapStateToProps)(ListTodo);