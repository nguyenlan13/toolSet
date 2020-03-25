import { 
    LOG_IN_USER,
    SIGN_UP_USER,
    LOGOUT
} from '../actionTypes'

export default function userReducer(state = {
        isAuthenticated: false
    }, action){

    switch(action.type){
        case LOG_IN_USER: 
            return {...action.payload, isAuthenticated: true}
        case SIGN_UP_USER:
            return {...action.payload, isAuthenticated: true}
        case LOGOUT:
            return {...state, isAuthenticated: false}
        default:
            return state
    }
}