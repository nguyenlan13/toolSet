
import { 
    GET_LESSONS,
    ADD_LESSON,
    GET_LESSON_ATTEMPTS
} from '../actionTypes'


import {baseURL} from '../constants/baseURL'


export const getLessons = lessons => {
    return async function (dispatch) {
        try{
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
            console.log(error)
        }
    }
}


export const addLesson = (csrf_token, description, topic, user) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: ADD_LESSON,
                payload: {
                    lesson:{
                        description: description,
                        topic_id: topic,
                        user_id: user
                    }
                }
            })
            let response = await fetch(baseURL + "lessons",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({lesson: {description, topic, user}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
        }catch(error){
            console.log(error.message)
        }
    }
}


export const getLessonAttempts = (csrf_token, lessonId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "lessons/" + `${lessonId}` + "/attempts", {
            // let response = await fetch(baseURL + "lessons/" + `${lessonId}`, {
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
            let lessonAttemptsJson = await response.json()
            console.log(lessonAttemptsJson)
                dispatch({
                    type: GET_LESSON_ATTEMPTS,
                    // payload: 
                    payload: lessonAttemptsJson
                })
        }catch(error){
            console.log(error.message)
        }
    }
}