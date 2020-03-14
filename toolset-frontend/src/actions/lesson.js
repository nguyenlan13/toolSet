
import { 
    LOADING,
    GET_LESSONS,
    ADD_LESSON,
    GET_TOPIC_LESSONS
    // GET_LESSON_ATTEMPTS
} from '../actionTypes'

import { baseURL } from '../constants/baseURL'

export const getLessons = lessons => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + "lessons")
            if(!response.ok){
                throw response
            }
            let lessonsJson = await response.json()
                dispatch({
                    type: GET_LESSONS,
                    payload: lessonsJson
                })
        }catch(error){
            console.log(error.message)
        }
    }
}


export const addLesson = (csrf_token, description, topicId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "lessons",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({lesson: {description, topicId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            dispatch({
                type: ADD_LESSON,
                payload: {
                    lesson:{
                        description: description,
                        topic_id: topicId
                    }
                }
            })
        }catch(error){
            console.log(error.message)
        }
    }
}

export const getTopicLessons = (csrf_token, topicId) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + `topics/${topicId}/lessons`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let topicLessonsJson = await response.json()
                dispatch({
                    type: GET_TOPIC_LESSONS,
                    payload: topicLessonsJson
                })
        }catch(error){
            console.log(error.message)
        }
    }
}

// export const getLessonAttempts = (csrf_token, lessonId) => {
//     return async function (dispatch) {
//         try{
//             dispatch({
//                 type: LOADING
//             })
//             let response = await fetch(baseURL + `lessons/${lessonId}/attempts`, {
//                 method: "GET",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'X-CSRF-TOKEN': csrf_token
//                 },
//                 credentials: 'include'
//             })
//             if(!response.ok){
//                 throw response
//             }
//             let lessonAttemptsJson = await response.json()
//                 dispatch({
//                     type: GET_LESSON_ATTEMPTS,
//                     payload: lessonAttemptsJson
//                 })
//         }catch(error){
//             console.log(error.message)
//         }
//     }
// }