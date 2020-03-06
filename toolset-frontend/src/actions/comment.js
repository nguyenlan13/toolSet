// import {
//     ADD_COMMMENT,
//     EDIT_COMMENT
// } from '../actionTypes'

// import {baseURL} from '../constants/baseURL'



// export const addComment = (csrf_token, content, user_id) => {
//     return async function (dispatch) {
//         try{
//             dispatch({
//                 type: ADD_CATEGORY,
//                 payload: {
//                     category:{
//                         // category_id: id,
//                         name: name
//                     }
//                 }
//             })
//             let response = await fetch(baseURL + "categories",{
//                 method: "POST",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'X-CSRF-TOKEN': csrf_token
//                 },
//                 body: JSON.stringify({comment: {content, user_id}}),
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
