import {
    LOADING,
    GET_ATTEMPT_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT
} from '../actionTypes'

import { baseURL } from '../constants/baseURL'

export const getAttemptComments = (csrf_token, attemptId) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + `attempts/${attemptId}/comments`, {
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
            let attemptCommentsJson = await response.json()
                dispatch({
                    type: GET_ATTEMPT_COMMENTS,
                    payload: attemptCommentsJson
                })
        }catch(error){
            console.log(error.message)
        }
    }
}


export const addComment = (csrf_token, content, commentableId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + `attempts/${commentableId}/comments`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({comment: {content, commentable_id: commentableId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let commentJson = await response.json()
            dispatch({
                type: ADD_COMMENT,
                payload: commentJson
            })
        }catch(error){
        console.log(error.message)
        }
    }
}


export const editComment = (csrf_token, content, commentableId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + `attempts/${commentableId}/comments`,{
                method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({comment: {content, commentable_id: commentableId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let editcommentJson = await response.json()
            dispatch({
                type: EDIT_COMMENT,
                payload: editcommentJson
            })
        }catch(error){
        console.log(error.message)
        }
    }
}