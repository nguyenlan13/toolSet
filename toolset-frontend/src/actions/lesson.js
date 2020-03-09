
import { 
    ADD_LESSON,
    GET_LESSON_ATTEMPTS
} from '../actionTypes'

// import {getToken} from './authSetup'
import {baseURL} from '../constants/baseURL'





export const addLesson = (csrf_token, name) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: ADD_LESSON,
                payload: {
                    lesson:{
                        name: name
                    }
                }
            })
            let response = await fetch(baseURL + "lessons",{
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
            console.log(error.message)
        }
    }
}


// const getLessonAttempts = lessonAttempts => {
//     return {
//         type: GET_LESSON_ATTEMPTS,
//         payload: lessonAttempts
//     }
// }
