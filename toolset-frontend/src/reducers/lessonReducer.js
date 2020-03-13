import { 
    GET_LESSONS,
    ADD_LESSON,
    GET_LESSON_ATTEMPTS
} from '../actionTypes'

export default function lessonReducer(state=[], action){

    switch(action.type){
        case GET_LESSONS:
            console.log(action.payload)
            return action.payload
        case ADD_LESSON:
            return [...state, action.payload]
        case GET_LESSON_ATTEMPTS:
            return [...state, action.payload]
        default:
            return state
    }
}