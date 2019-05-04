import React from 'react'
import {
    actionFilter
} from '../../store/actions'
import { connect } from 'react-redux'
import './style.css'
const filterToDo = ({ filterTodo}) => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h4 className='header-title'>My todoList</h4>
                </div>
                <div className='col-lg-12 btn-group btn-container'>
                    <button 
                    onClick={() => filterTodo('ALL')}
                    className='btn btn-outline-info'>all</button>
                    <button 
                    onClick={() => filterTodo('TODO')}
                    className='btn btn-outline-info'>todo</button>
                    <button 
                    onClick={() => filterTodo('COMPLETED')}
                    className='btn btn-outline-info'>completed</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    filterTodo: (payload) => dispatch(actionFilter(payload)),
})

export default connect(null, mapDispatchToProps)(filterToDo);