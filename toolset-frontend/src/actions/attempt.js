
import { 
    // GET_LESSON_ATTEMPTS,
    ADD_ATTEMPT
} from '../actionTypes'

// import {getToken} from './authSetup'
import {baseURL} from '../constants/baseURL'


// export const getLessonAttempts = lessonAttempts => {
//     return async function (dispatch) {
//         try{
//             let response = await fetch(baseURL + `lessons/${id}/attempts`)
//             if(!response.ok){
//                 throw response
//             }
//             let lessonAttemptsJson = await response.json()
//             console.log(lessonAttemptsJson)
//                 dispatch({
//                     type: GET_LESSON_ATTEMPTS,
//                     payload: lessonAttemptsJson
//                 })
//         }catch(error){
//             console.log(error)
//         }
//     }
// }


// export const addAttempt = (csrf_token, name) => {
//     return async function (dispatch) {
//         try{
//             dispatch({
//                 type: ADD_LESSON,
//                 payload: {
//                     lesson:{
//                         name: name
//                     }
//                 }
//             })
//             let response = await fetch(baseURL + "topics",{
//                 method: "POST",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'X-CSRF-TOKEN': csrf_token
//                 },
//                 body: JSON.stringify({topic: {name}}),
//                 credentials: 'include'
//             })
//             if(!response.ok){
//                 throw response
//             }
//         }catch(error){
//             console.log(error)
//         }
//     }
// }


// const getTopicLessons = lessons => {
//     return {
//         type: GET_TOPIC_LESSONS,
//         payload: lessons
//     }
// }
