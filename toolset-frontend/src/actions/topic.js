import { 
    LOADING,
    GET_TOPICS,
    ADD_TOPIC,
    GET_CATEGORY_TOPICS,
    ADD_CATEGORY_TOPIC
} from '../actionTypes'

import { baseURL } from '../constants/baseURL'


export const getTopics = topics => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + "topics")
            if(!response.ok){
                throw response
            }
            let topicsJson = await response.json()
                dispatch({
                    type: GET_TOPICS,
                    payload: topicsJson
                })
        }catch(error){
            console.log(error.message)
        }
    }
}


export const addTopic = (csrf_token, name) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "topics",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({topic: {name}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let topicJson = await response.json()
            dispatch({
                type: ADD_TOPIC,
                payload: topicJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}



export const getCategoryTopics = (csrf_token, categoryId) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + `categories/${categoryId}/topics`, {
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
            let categoryTopicsJson = await response.json()
                dispatch({
                    type: GET_CATEGORY_TOPICS,
                    payload: categoryTopicsJson
                })
            // return categoriesJson
        }catch(error){
            console.log(error.message)
        }
    }
}


export const addCategoryTopic = (csrf_token, name, categoryId) => {
    console.log(categoryId)
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + `categories/${categoryId}/topics`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({topic: {name}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let categoryTopicJson = await response.json()
            dispatch({
                type: ADD_CATEGORY_TOPIC,
                payload: categoryTopicJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}