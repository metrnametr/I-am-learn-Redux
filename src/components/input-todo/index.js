import React, { Component } from 'react'
import { 
    actionInputTodo,
    actionClearInput,
    actionAddTodo,
    actionArea
} from '../../store/actions'
import './style.css'
import { connect } from 'react-redux'
class InputToDo extends Component {

 handleValue = (e) => {
    this.props.inputTodo(e.target.value)
 }

   render(){
       const { addTodo, value, textarea, clearInput, textareaVisible } = this.props
    return(
        <div className='text-center todo-input container'>
            <input
            className='form-control'
            value={value}
            onChange={this.handleValue}
            placeholder='enter your todo'
            />
                {(textarea) ? <textarea className='form-control' placeholder='добавить описание'/> : <button
                className='btn btn-outline-secondary'
                onClick={() => textareaVisible(true)}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>}
                <button
                className='btn btn-info col-lg-12'
                onClick={() =>  {
                    addTodo({title: value, id: Math.random()}) 
                    clearInput()
                    textareaVisible(false)
                }}>Add todo</button>
        </div>
    )
   }
}

const mapStateToProps = (state) => ({
    value: state.inputReducer.value,
    textarea: state.textareaReducer.textarea
}) 

const mapDispatchToProps = (dispatch) => ({
    inputTodo:(payload) => dispatch(actionInputTodo(payload)),
    clearInput:() => dispatch(actionClearInput()),
    addTodo:(payload) => dispatch(actionAddTodo(payload)),
    textareaVisible: (payload) => dispatch(actionArea(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(InputToDo)