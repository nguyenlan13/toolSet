
import { 
    LOADING,
    GET_LESSONS,
    ADD_LESSON,
    GET_TOPIC_LESSONS
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
            let response = await fetch(baseURL + `topics/${topicId}/lessons`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({lesson: {description}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let lessonJson = await response.json()
            dispatch({
                type: ADD_LESSON,
                payload: 
                    lessonJson
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
