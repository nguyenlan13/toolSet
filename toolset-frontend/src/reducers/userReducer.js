import { 
    LOG_IN_USER,
    SIGN_UP_USER,
    LOGOUT
} from '../actionTypes'

export default function userReducer(state="", action){

    switch(action.type){
        case LOG_IN_USER: 
            return action.payload
        case SIGN_UP_USER:
            return action.payload
        case LOGOUT:
            return {...state}
        default:
            return state
    }
}