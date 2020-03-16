import { 
    LOADING,
    GET_CATEGORIES,
    ADD_CATEGORY,
    // GET_CATEGORY_TOPICS
} from '../actionTypes'

export default function categoriesReducer(state = {
    categories: [],
    loading: false,
}, action) {

    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_CATEGORIES:
            return {...state, categories: action.payload, loading: false}
        case ADD_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]}
            // return [...state, action.payload]
        default:
            return state
    }
}