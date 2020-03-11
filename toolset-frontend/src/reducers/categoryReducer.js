import { 
    GET_CATEGORIES,
    ADD_CATEGORY,
    GET_CATEGORY_TOPICS
} from '../actionTypes'

export default function categoriesReducer(state=[], action){
    console.log(state)
    switch(action.type){
        case GET_CATEGORIES:
        console.log(action.payload)
            return action.payload
        case ADD_CATEGORY:
            return [...state, action.payload]
        case GET_CATEGORY_TOPICS:
            return action.payload
            
        default:
            return state
    }
}