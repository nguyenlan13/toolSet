import {
    ADD_REACTION,
    DELETE_REACTION
} from '../actionTypes'

import {baseURL} from '../constants/baseURL'

export const addReaction = (csrf_token, reaction_type, attemptId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "reactions",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({reaction: {reaction_type, attemptId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let reactionJson = await response.json()
            dispatch({
                type: ADD_REACTION,
                payload: reactionJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}

export const deleteReaction = (csrf_token, reaction_type, attemptId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "reactions",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({reaction: {reaction_type, attemptId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let reactionJson = await response.json()
            dispatch({
                type: DELETE_REACTION,
                payload: reactionJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}