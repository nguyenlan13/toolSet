import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import categoryReducer from './categoryReducer'
import userReducer from './userReducer'
import topicReducer from './topicReducer'
import lessonReducer from './lessonReducer'
import attemptReducer from './attemptReducer'

const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,
    user: userReducer,
    category: categoryReducer,
    topic: topicReducer,
    lesson: lessonReducer,
    attempt: attemptReducer

})

export default rootReducer