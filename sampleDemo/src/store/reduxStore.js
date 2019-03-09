import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import GetListReducer  from '../reducer/GetListReducer'
const reducers = combineReducers({
    GetListReducer
})
export const store = createStore(reducers, applyMiddleware(thunk))