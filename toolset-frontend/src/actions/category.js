
import { 
    GET_CATEGORIES,
    ADD_CATEGORY,
    // GET_CATEGORY_TOPICS
} from '../actionTypes'

// import {getToken} from './authSetup'
import {baseURL} from '../constants/baseURL'
// import {Headers} from '../constants/headers'

export const getCategories = categories => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "categories")
            if(!response.ok){
                throw response
            }
            let categoriesJson = await response.json()
            // function dispatchGetCategories (categories) {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: categoriesJson
                })
            // }
            
            // return dispatchGetCategories( await categoriesJson)
        }catch(error){
            console.log(error)
        }
    }
}


export const addCategory = (csrf_token, name, id) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: ADD_CATEGORY,
                payload: {
                    category:{
                        name: name
                    }
                }
            })
            let response = await fetch(baseURL + "categories",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({category: {name, id}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            // let categoryJson = await response.json()
    
            // function dispatchAddCategory (category) {
                // dispatch({
                //     type: ADD_CATEGORY,
                //     payload: category
                // })
            // }
            // return dispatchGetCategories( await categoryJson)
        }catch(error){
            console.log(error)
        }
    }
}


// const getCategoryTopics = topics => {
//     return {
//         type: GET_CATEGORY_TOPICS,
//         payload: topics
//     }
// }

