import { 
    GET_TOPICS,
    GET_TOPIC_LESSONS,
    ADD_TOPIC,
    GET_CATEGORY_TOPICS
} from '../actionTypes'


export default function topicsReducer(state=[], action={}){

    switch(action.type){
        case GET_TOPICS:
            return action.payload
        case GET_TOPIC_LESSONS:
            return {...state, lessons: action.payload}
        case ADD_TOPIC:
            return [...state, action.payload]
        case GET_CATEGORY_TOPICS:
            console.log(action.payload)
            // return {...state, ...state.topics}
            return [...state, action.payload]
        default:
            return state
    }
}