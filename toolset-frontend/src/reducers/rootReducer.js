import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'
import topicReducer from './topicReducer'


const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,
    user: userReducer,
    category: categoryReducer,
    topic: topicReducer

})

export default rootReducer