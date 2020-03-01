import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'



const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,
    user: userReducer,
    category: categoryReducer
})

export default rootReducer