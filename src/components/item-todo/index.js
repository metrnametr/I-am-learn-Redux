import React from 'react'
import { actionDeleteItem, actionCompletedItem } from '../../store/actions'
import { connect } from 'react-redux'
const itemToDo = ({ item, deleteItem, completedItem }) => {
    const styleItem = {
        textDecoration: (item.completed) ? 'line-through' : 'none'
    }
    return(
        <li 
        style={styleItem}
        className='list-group-item'
        >
            <div className='col-lg-12 d-flex justify-content-between'>
                {item.title}
                <div className='btn-group'>
                    <button className='btn btn-danger' onClick={() => deleteItem(item)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button className='btn btn-success'onClick={() => completedItem(item)}>
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className='col-lg-12 text-center'>
                <button className='btn btn-outline-secondary'>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
            </div>
        </li>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (payload) => dispatch(actionDeleteItem(payload)),
    completedItem:(payload) => dispatch(actionCompletedItem(payload))
})
export default connect(null, mapDispatchToProps)(itemToDo);