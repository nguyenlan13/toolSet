import { 
    GET_CATEGORIES,
    ADD_CATEGORY,
    // GET_CATEGORY_TOPICS
} from '../actionTypes'

export default function categoriesReducer(state=[], action){
    switch(action.type){
        case GET_CATEGORIES:
        console.log(action.payload)
            return action.payload
        case ADD_CATEGORY:
            return [...state, action.payload]
        // case GET_CATEGORY_TOPICS:
        //     console.log(action.payload)
        //     // return {...state, ...state.topics}
        //     return {...state, topics: action.payload}
        default:
            return state
    }
}