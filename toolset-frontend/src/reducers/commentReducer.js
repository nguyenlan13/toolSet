import { 
    LOADING,
    GET_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT
} from '../actionTypes'

export default function commentReducer(state = {
        attemptComments:[],
        loading: false
        // commentComments: []
    }, action){

    switch(action.type) {
        case LOADING:
            return {...state, loading: true}
        case GET_COMMENTS:
            return {...state, attemptComments: action.payload, loading: false}
        case ADD_COMMENT:
            return [...state, action.payload]
        case EDIT_COMMENT:
            return {attemptComments: action.payload, loading: false}
        default:
            return state
    }
}