import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import CommentForm from '../Comment/CommentForm'
// import CommentContainer from '../../containers/CommentContainer'

class AttemptItem extends Component {

    state = {
        upVote: 0
    }

//upvote button
    handleUpVote = () => {
        this.setState(prevState => ({
            upVote: prevState.upVote +1
        })
        )
    }

    render(){
        const {content, diagram, timeStamp, attemptId, attempt_number} = this.props
        return(
            <div>
                <p>

                    {timeStamp}
                    <br/>
                    Attempt: #{attempt_number}
                     <br />
                     <Link className="attempt-content" to={`/attempts/${attemptId}/comments`}>
                    {content}
                    <br />
                    </Link>
                    <img src={diagram} alt="" height="350" width="300"/>
                    <br />
                    <button onClick={this.handleUpVote}>
                        Up Vote
                    </button>
                    {this.state.upVote}
                    {/* <CommentForm/> */}
                </p>
            </div>
        )
    }  
}


export default AttemptItem
