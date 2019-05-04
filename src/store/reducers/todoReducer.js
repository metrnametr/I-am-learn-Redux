const initialState = { 
    todo: [{ title: 'hooya', id: 2, completed: false}]
}


const todoReducer = (state = initialState, { type, payload} ) => {
    switch(type){
        case 'ADD': {
            //input have a value
            if(payload.title) return { todo: [...state.todo, payload]}
            else return { todo: [...state.todo]}
        }
        case 'DELETE': {
            const idx = state.todo.findIndex(itm => itm === payload)
            return{
                todo: [
                    ...state.todo.slice(0, idx),
                    ...state.todo.slice(idx + 1)
                ]
            }
        }
        case 'COMPLETED': {
            const idx = state.todo.findIndex(itm => itm === payload)
            const item = {...state.todo[idx], completed: !state.todo[idx].completed}
            return{
                todo: [
                    ...state.todo.slice(0, idx),
                    item,
                    ...state.todo.slice(idx + 1)
                ]
            }
        }
        
        default: return state;
    }
}
const filterTodo = {
    filterType: ''
}
const filterReducer = ( state = filterTodo, { type, payload} ) => {
    switch(type){
        case 'FILTER': {
            console.log(payload)
            return{
                ...state, filterType: payload
            }
        }
        default: return state;
    }
}
 
const inputReducer = (state = {value: ''}, { type, payload} ) => {
    switch(type){
        case 'INPUT': return { ...state, value: payload};
        case 'CLEAR': return {...state, value: ''}
        default: return state;
    }
}

const textareaReducer = (state = {textarea: false}, { type, payload} ) => {
    switch(type){
        case 'TEXTAREA_VISIBLE': return { ...state, textarea: payload};
        default: return state;
    }
}
export {
    inputReducer,
    filterReducer,
    todoReducer,
    textareaReducer
}
