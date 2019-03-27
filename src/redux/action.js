const ADD = 'ADD'

function addAction(payload){
    return {
        type: ADD,
        payload
    }
}

module.exports = {
    addAction
}