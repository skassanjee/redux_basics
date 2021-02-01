const redux = require('redux')

const createStore = redux.createStore


//action
const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
    
}


const initialState = {
    numOfCakes: 10
}

//reducer  -- update state
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
} 


//store
const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()







// getState- gives access to state
// dispatch -- allows state to update