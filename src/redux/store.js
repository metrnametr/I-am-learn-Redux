class Store{
    constructor(state, reducer){
        this._state = state;
        this._reducer = reducer
        this._callbacks = []
    }

    get getState(){
        return this._state
    }

    subscribe(callback){
        this._callbacks.push(callback)
        this._callbacks.filter(cb => cb !== callback)
    }

    dispatch(action){
        this._state = this._reducer(this._state, action)
        this._callbacks.forEach(cb => cb())
    }
}

module.exports = Store;