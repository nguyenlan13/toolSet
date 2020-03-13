import { GET_CSRF_TOKEN } from '../actionTypes'
import { baseURL } from '../constants/baseURL'

export const getToken = () => {
    return async function (dispatch) {
        try{
            const res = await fetch(baseURL + "auth", {
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const tokenJson = await res.json()
            const csrf_token = tokenJson.csrf_auth_token
            dispatch({
                type: GET_CSRF_TOKEN,
                payload: csrf_token
            });
        }catch(error){
            console.log(error)
        }
    }
}




