import { 
    LOADING,
    GET_ATTEMPTS,
    ADD_ATTEMPT,
    GET_LESSON_ATTEMPTS,
    GET_ATTEMPT_REACTIONS
} from '../actionTypes'

export default function attemptReducer(state = {
        attempts: [],
        loading: false,
        attemptReactions: [],
        lessonAttempts: []
    }, action){

    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_ATTEMPTS:
            return {...state, attempts: action.payload, loading: true}
        case GET_ATTEMPT_REACTIONS:
            return {...state, attemptReactions: action.payload, loading: true}
        case ADD_ATTEMPT:
            // return [...state, action.payload]
            return {...state, lessonAttempts: [...state.lessonAttempts, action.payload]}
        case GET_LESSON_ATTEMPTS:
            return {...state, lessonAttempts: action.payload, loading: true}
        default:
            return state
    }
}