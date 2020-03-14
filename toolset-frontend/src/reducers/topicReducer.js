import { 
    LOADING,
    GET_TOPICS,
    ADD_TOPIC,
    GET_CATEGORY_TOPICS
} from '../actionTypes'

export default function topicsReducer(state = {
        topics: [], 
        loading: false, 
        categoryTopics: []
    }, action){

    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_TOPICS:
            return {...state, topics: action.payload, loading: false}
        case ADD_TOPIC:
            return [...state, action.payload]
        case GET_CATEGORY_TOPICS:
            return {...state, categoryTopics: action.payload, loading: false}
        default:
            return state
    }
}