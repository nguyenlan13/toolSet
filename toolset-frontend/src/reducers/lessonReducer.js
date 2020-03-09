import { 
    ADD_LESSON,
    GET_LESSON_ATTEMPTS
} from '../actionTypes'

export default function lessonReducer(state=[], action){

    switch(action.type){

        case ADD_LESSON:
            return [...state, action.payload]
        case GET_LESSON_ATTEMPTS:
            return action.payload
        default:
            return state
    }
}