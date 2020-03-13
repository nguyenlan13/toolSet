
import {
    GET_ATTEMPTS,
    // GET_LESSON_ATTEMPTS,
    ADD_ATTEMPT
} from '../actionTypes'

// import {getToken} from './authSetup'
import {baseURL} from '../constants/baseURL'

export const addAttempt = (csrf_token, name) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: ADD_ATTEMPT,
                payload: {
                    lesson:{
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
