import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import CommentForm from '../Comment/CommentForm'
import CommentContainer from '../../containers/CommentContainer'

class AttemptItem extends Component {


    render(){
        const {content, diagram, timeStamp, attemptId} = this.props
        return(
            <div>
                <p>
                        {timeStamp}
                     <br />
                     <Link className="link-color" to={`/attempts/${attemptId}/comments`}>
                        {content} - {diagram}
                    <br />
                    </Link>
                    {/* <CommentContainer/> */}
            
                </p>
            </div>
        )
    }  
}

// const mapStateToProps = (state) => {
//     const { attempts, csrf_token, user} = state;
//     return { 
//         attempts: attempts.attempts,
//         lessonAttempts: attempts.lessonAttempts,
//         csrf_token: csrf_token,
//         user: user
//     }
// }

export default AttemptItem
// export default connect(mapStateToProps)(AttemptItem)