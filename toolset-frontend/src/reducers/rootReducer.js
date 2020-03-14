import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'
import topicReducer from './topicReducer'
import lessonReducer from './lessonReducer'
import attemptReducer from './attemptReducer'
import commentReducer from './commentReducer'

const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,
    user: userReducer,
    categories: categoryReducer,
    topics: topicReducer,
    lessons: lessonReducer,
    attempts: attemptReducer,
    comments: commentReducer

})

export default rootReducer