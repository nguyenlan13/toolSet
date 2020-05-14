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


// class Attempt extends Component {

//     state = {
//         like: 0,
//         updated: false
//     }


//     handleLikes = () => {
//         if(!this.state.updated) {
//             this.setState(prevState =>({
//                 like: prevState.like + 1,
//                 updated: true
//             }))
//         } else {
//             this.setState(prevState =>({
//                 like: prevState.like - 1,
//                 updated: false
//             }))
//         }
//     }


//     render() {
//         return (
//             <div>
//             <button onClick={this.handleLikes}>
//                 Like
//             </button>
            
//                 {this.state.like}
//             </div>
            
//         )
//     }

// }