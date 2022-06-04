import { combineReducers, createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const  rootReducer = combineReducers({
 
});

const middlewares = [
    thunk,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)))