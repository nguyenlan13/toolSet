import { 
    GET_TOPICS,
    ADD_TOPIC,
    GET_TOPIC_LESSONS
} from '../actionTypes'

export default function topicsReducer(state=[], action){

    switch(action.type){

        case GET_TOPICS:
            return action.payload
        case ADD_TOPIC:
            return [...state, action.payload]
        case GET_TOPIC_LESSONS:
            return action.payload
        default:
            return state
    }
}