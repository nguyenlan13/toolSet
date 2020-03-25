// async function example() {
//     try{
//         const res = await fetch("http://localhost:3001/api/v1/auth", {
//             credentials: 'include'
//         })
//         const tokenJson = await res.json()
//         let csrf_token = tokenJson.csrf_auth_token
//         console.log(tokenJson)

//     }catch(error){
//         console.log(error)
//     }
// }