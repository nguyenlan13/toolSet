import { 
    LOADING,
    GET_LESSONS,
    ADD_LESSON,
    GET_TOPIC_LESSONS
} from '../actionTypes'

export default function lessonReducer(state = {
        lessons:[],
        loading: false,
        topicLessons: []
    }, action){

    switch(action.type) {
        case LOADING:
            return {...state, loading: true}
        case GET_LESSONS:
            return {...state, lessons: action.payload, loading: false}
        case ADD_LESSON:
            // return [...state, action.payload]
            return {...state, topicLessons: [...state.topicLessons, action.payload]}
        case GET_TOPIC_LESSONS:
            return {...state, topicLessons: action.payload, loading: false}
        default:
            return state
    }
}