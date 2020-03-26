import { LOG_IN_USER } from '../actionTypes'
import { SIGN_UP_USER } from '../actionTypes'
import { LOGOUT } from '../actionTypes'
import { baseURL } from '../constants/baseURL'

export const login = (csrf_token, email, password) => {
    return async function (dispatch) {
        try{
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
            if(!res.ok){
                throw res
            }
            let loginJson = await res.json()
            dispatch({
                type: LOG_IN_USER,
                payload: loginJson
                // {
                //         email: email,
                //         password: password
                // }
            });
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}


export const signup = (csrf_token, email, username, name, password) => {
    return async function (dispatch) {
        try{
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
            // if(!res.ok){
            //     throw res
            // }
            let signupJson = await res.json()
            if(!Object.keys(signupJson).includes("errors")){
                dispatch({
                    type: SIGN_UP_USER,
                    payload: signupJson
                    // {
                    //     user:{
                    //         email: email,
                    //         username: username,
                    //         name: name,
                    //         password: password
                    //     }
                    // }
                });
            }
            return signupJson
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}

export const logout = csrf_token => {
    return async function (dispatch) {
        try{
            const res = await fetch(baseURL + "logout", {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            dispatch({
                type: LOGOUT
            });
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}
