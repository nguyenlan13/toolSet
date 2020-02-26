import { 
    BASE_URL,
    GET_CATEGORIES,
    ADD_CATEGORY,
    GET_CATEGORY_TOPICS
} from '../actionTypes'

export const getCategories = categories => {
    return async function (dispatch) {
        try{
            let response = await fetch(BASE_URL + "categories")
            if(!response.ok){
                throw response
            }
            let categoriesJson = await response.json()
    
            function dispatchGetCategories (categories) {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: categories
                })
            }
            return dispatchGetCategories( await categoriesJson)
        }catch(error){
            console.log(error)
        }
    }
}


export const addCategory = category => {
    return async function (dispatch) {
        try{
            let response = await fetch(BASE_URL + "categories",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dispatch),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            // let categoryJson = await response.json()
    
            function dispatchAddCategory (category) {
                dispatch({
                    type: ADD_CATEGORY,
                    payload: category
                })
            }
            // return dispatchGetCategories( await categoryJson)
        }catch(error){
            console.log(error)
        }
    }
}


const getCategoryTopics = topics => {
    return {
        type: GET_CATEGORY_TOPICS,
        payload: topics
    }
}

