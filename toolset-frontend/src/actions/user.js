import { LOG_IN_USER } from '../actionTypes'
import { SIGN_UP_USER } from '../actionTypes'
import { baseURL } from '../constants/baseURL'
// import { Headers } from '../constants/headers'


export const login = (csrf_token, email, password) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: LOG_IN_USER,
                payload: {
                    // user:{
                        email: email,
                        password: password
                    // }
                }
            });
            console.log(dispatch)
            console.log(csrf_token, email, password)
            const res = await fetch(baseURL + "login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({email, password}),
                credentials: 'include'
            })
            console.log(res.json())
            if(!res.ok){
                throw res
            }
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}

export const signup = (csrf_token, email, username, name, password) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: SIGN_UP_USER,
                payload: {
                    user:{
                        email: email,
                        username: username,
                        name: name,
                        password: password
                    }
                }
            });
            // console.log(csrf_token, email, password)
            const res = await fetch(baseURL + "signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user:{email, username, name, password}}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}