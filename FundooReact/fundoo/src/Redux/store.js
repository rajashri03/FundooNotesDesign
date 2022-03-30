import {createStore} from 'redux'
import {combineReducers} from 'redux'
// import thunk from 'redux-thunk'
// import reducer from './reducers/booklist/booklistReducer'
import { navReducer } from './Reducer/navReducer'


const mainReducer= combineReducers({
    navReducer
})

const store=createStore(mainReducer)

export default store 