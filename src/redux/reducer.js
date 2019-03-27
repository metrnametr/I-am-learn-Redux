

function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD' : return { count: state.count + action.payload}
    }
}

module.exports = reducer;
    
  