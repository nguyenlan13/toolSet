import {
    LOADING,
    GET_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT
} from '../actionTypes'

import { baseURL } from '../constants/baseURL'

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
                body: JSON.stringify({comment: {content, commentableId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            dispatch({
                type: ADD_COMMENT,
                payload: {
                    comment:{
                        content: content,
                        commentable_id: commentableId
                    }
                }
            })
        }catch(error){
        console.log(error)
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
                body: JSON.stringify({comment: {content, commentableId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            dispatch({
                type: EDIT_COMMENT,
                payload: {
                    comment:{
                        content: content,
                        commentable_id: commentableId
                    }
                }
            })
        }catch(error){
        console.log(error)
        }
    }
}