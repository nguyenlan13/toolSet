
import { 
    LOADING,
    GET_CATEGORIES,
    ADD_CATEGORY,
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
            let categoryJson = await response.json()
            dispatch({
                type: ADD_CATEGORY,
                payload: categoryJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}
