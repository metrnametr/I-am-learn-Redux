const appReducer = (state = 0, { type, payload}) => {
    switch(type){
        case 'INC': return state + 1;
        default: return state;
    }
}

export default appReducer;