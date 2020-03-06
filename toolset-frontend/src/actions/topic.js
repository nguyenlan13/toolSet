import { 
    GET_TOPICS,
    ADD_TOPIC
    // GET_TOPIC_LESSONS
} from '../actionTypes'

import {baseURL} from '../constants/baseURL'


export const getTopics = topics => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "topics")
            if(!response.ok){
                throw response
            }
            let topicsJson = await response.json()
            console.log(topicsJson)
                dispatch({
                    type: GET_TOPICS,
                    payload: topicsJson
                })
        }catch(error){
            console.log(error)
        }
    }
}


export const addTopic = (csrf_token, name) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: ADD_TOPIC,
                payload: {
                    topic:{
                        name: name
                    }
                }
            })
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
        }catch(error){
            console.log(error)
        }
    }
}


// const getTopicLessons = lessons => {
//     return {
//         type: GET_TOPIC_LESSONS,
//         payload: lessons
//     }
// }

