import { 
    GET_ATTEMPTS,
    // GET_LESSON_ATTEMPTS,
    ADD_ATTEMPT
} from '../actionTypes'

export default function attemptReducer(state=[], action){

    switch(action.type){
        
        case GET_ATTEMPTS:
            return action.payload
        case ADD_ATTEMPT:
            return [...state, action.payload]
        // case GET_LESSON_ATTEMPTS:
        //     return [...state, action.payload]
        default:
            return state
    }
}