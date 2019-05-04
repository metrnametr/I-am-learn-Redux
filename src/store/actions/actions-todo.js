const actionDeleteItem = (payload) => ({
    type: 'DELETE',
    payload
})

const actionCompletedItem = (payload) => ({
    type: 'COMPLETED',
    payload
})

const actionInputTodo = (payload) => ({
    type: 'INPUT',
    payload
})

const actionClearInput = () => ({
    type: 'CLEAR'
})

const actionAddTodo = (payload) => ({
    type: 'ADD',
    payload
})

const actionArea = (payload) => ({
    type: 'TEXTAREA_VISIBLE',
    payload
})

export {
    actionCompletedItem,
    actionDeleteItem,
    actionInputTodo,
    actionArea,
    actionClearInput,
    actionAddTodo
}