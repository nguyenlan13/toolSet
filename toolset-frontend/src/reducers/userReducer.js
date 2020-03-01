import { 
    LOG_IN_USER,
    SIGN_UP_USER
} from '../actionTypes'

export default function userReducer(state="", action){

    switch(action.type){
        case LOG_IN_USER: 
            return action.payload
        case SIGN_UP_USER:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}