import { 
    LOADING,
    GET_TOPICS,
    // GET_TOPIC_LESSONS,
    ADD_TOPIC,
    GET_CATEGORY_TOPICS
} from '../actionTypes'


// export default function topicsReducer(state=[], action={}){

//     switch(action.type){
//         case GET_TOPICS:
//             return action.payload
//         case GET_TOPIC_LESSONS:
//             return {...state, lessons: action.payload}
//         case ADD_TOPIC:
//             return [...state, action.payload]
//         case GET_CATEGORY_TOPICS:
//             // console.log(action.payload)
//             // return {...state, ...state.topics}
//             return {...state, topics: action.payload}
//         default:
//             return state
//     }
// }

export default function topicsReducer(state={
        topics: [], 
        loading: false, 
        categoryTopics: []
    }, action){

    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case GET_TOPICS:
            return {...state, topics: action.payload, loading: false}
        // case GET_TOPIC_LESSONS:
        //     return {...state, lessons: action.payload}
        case ADD_TOPIC:
            return [...state, action.payload]
        case GET_CATEGORY_TOPICS:
            return {...state, categoryTopics: action.payload, loading: false}
        default:
            return state
    }
}