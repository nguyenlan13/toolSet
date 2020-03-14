import { 
    LOADING,
    GET_ATTEMPTS,
    ADD_ATTEMPT,
    GET_LESSON_ATTEMPTS,
} from '../actionTypes'

export default function attemptReducer(state = {
        attempts: [],
        loading: false,
        lessonAttempts: []
    }, action){

    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_ATTEMPTS:
            return {...state, attempts: action.payload, loading: true}
        case ADD_ATTEMPT:
            return [...state, action.payload]
        case GET_LESSON_ATTEMPTS:
            return {...state, lessonAttempts: action.payload, loading: true}
        default:
            return state
    }
}