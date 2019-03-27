function createCount(windowCount){
    var rootView = document.querySelector('.window-calc')
    var elView = document.createElement('span')

    elView.innerHTML = windowCount;

    rootView.appendChild = elView;
}

document.querySelector('.count-btn').addEventListener('click', function(){
    var count = store.dispatch(action.addAction(1))
    createCount(count)
})