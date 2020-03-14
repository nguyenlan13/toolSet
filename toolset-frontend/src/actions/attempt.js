
import {
    LOADING,
    GET_ATTEMPTS,
    ADD_ATTEMPT,
    GET_LESSON_ATTEMPTS,
} from '../actionTypes'

import {baseURL} from '../constants/baseURL'


export const getAttempts = attempts => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "attempts")
            if(!response.ok){
                throw response
            }
            let attemptsJson = await response.json()
                dispatch({
                    type: GET_ATTEMPTS,
                    payload: attemptsJson
                })
        }catch(error){
            console.log(error)
        }
    }
}


export const addAttempt = (csrf_token, content, diagram, attemptNumber, lessonId, ) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: ADD_ATTEMPT,
                payload: {
                    attempt:{
                        content: content,
                        diagram: diagram,
                        attempt_number: attemptNumber,
                        lesson_id: lessonId
                    }
                }
            })
            let response = await fetch(baseURL + "attempts",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({attempt: {content, diagram, attemptNumber, lessonId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
        }catch(error){
            console.log(error)
        }
    }
}

export const getLessonAttempts = (csrf_token, lessonId) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + `lessons/${lessonId}/attempts`, {
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
                dispatch({
                    type: GET_LESSON_ATTEMPTS,
                    payload: lessonAttemptsJson
                })
        }catch(error){
            console.log(error.message)
        }
    }
}