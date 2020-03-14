
import { 
    LOADING,
    GET_CATEGORIES,
    ADD_CATEGORY,
    // GET_CATEGORY_TOPICS
} from '../actionTypes'


import { baseURL } from '../constants/baseURL'


export const getCategories = categories => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOADING
            })
            let response = await fetch(baseURL + "categories")
            if(!response.ok){
                throw response
            }
            let categoriesJson = await response.json()
                dispatch({
                    type: GET_CATEGORIES,
                    payload: categoriesJson
                })
            // return categoriesJson
        }catch(error){
            console.log(error.message)
        }
    }
}


export const addCategory = (csrf_token, name) => {
    return async function (dispatch) {
        try{
            let response = await fetch(baseURL + "categories",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({category: {name}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            dispatch({
                type: ADD_CATEGORY,
                payload: {
                    category:{
                        name: name
                    }
                }
            })
        }catch(error){
            console.log(error.message)
        }
    }
}


// export const getCategoryTopics = (csrf_token, categoryId) => {
//     console.log(csrf_token, categoryId)
//     return async function (dispatch) {
//         try{
//             let response = await fetch(baseURL + `categories/${categoryId}/topics`, {
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
//             let categoryTopicsJson = await response.json()
//             console.log(categoryTopicsJson)
//                 dispatch({
//                     type: GET_CATEGORY_TOPICS,
//                     payload: categoryTopicsJson
//                 })
//             // return categoriesJson
//         }catch(error){
//             console.log(error)
//         }
//     }
// }

