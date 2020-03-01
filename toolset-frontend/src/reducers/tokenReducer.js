import { 
    GET_CSRF_TOKEN
} from '../actionTypes'

export default function tokenReducer(state="", action){

    switch(action.type){
        case GET_CSRF_TOKEN:
                return action.payload
        default:
            return state
    }
}