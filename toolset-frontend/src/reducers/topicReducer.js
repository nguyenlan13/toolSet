import { 
    LOADING,
    GET_TOPICS,
    ADD_TOPIC,
    GET_CATEGORY_TOPICS,
    ADD_CATEGORY_TOPIC
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
            // return [...state, action.payload]
            return {...state, topics: [...state.topics, action.payload]}
        case GET_CATEGORY_TOPICS:
            return {...state, categoryTopics: action.payload, loading: false}
        case ADD_CATEGORY_TOPIC:
            // return [...state, action.payload]
            return {...state, categoryTopics: [...state.categoryTopics, action.payload]}
        default:
            return state
    }
}