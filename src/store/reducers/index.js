import { combineReducers } from 'redux'
import appReducer from './appReducer'
import { todoReducer,  inputReducer, filterReducer, textareaReducer } from './todoReducer'

export default combineReducers({
    appReducer,
    todoReducer,
    filterReducer,
    inputReducer,
    textareaReducer 
})