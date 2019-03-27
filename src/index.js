const Store = require('./redux/store.js');
const reducer = require('./redux/reducer');
const action = require('./redux/action');

const initialState = { count: 0 }

const store = new Store(initialState, reducer)
const elView = document.createElement('span')
store.subscribe(() => createCount(store.getState.count, elView))


store.dispatch(action.addAction(1))
store.dispatch(action.addAction(1))




function createCount(windowCount, elView){
    var rootView = document.querySelector('.window-calc')
    
    elView.innerHTML = windowCount;
    console.log(elView)
    rootView.appendChild(elView);
}

document.querySelector('.count-btn').addEventListener('click', function(){
    store.dispatch(action.addAction(1))
   
})