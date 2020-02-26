import { 
    GET_CATEGORIES,
    ADD_CATEGORY,
    GET_CATEGORY_TOPICS
} from '../actionTypes'

export function categoriesReducer(state=[], action){

    switch(action.type){
        case GET_CATEGORIES:
            return [...state]
        case ADD_CATEGORY:
            return [...state, action.payload]
        default:
            return state
    }
}