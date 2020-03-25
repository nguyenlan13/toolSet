import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import CommentForm from '../Comment/CommentForm'
// import CommentContainer from '../../containers/CommentContainer'

class AttemptItem extends Component {


    render(){
        const {content, diagram, timeStamp, attemptId} = this.props
        return(
            <div>
                <p>
                    {timeStamp}
                     <br />
                     <Link className="link-color" to={`/attempts/${attemptId}/comments`}>
                    {content}
                    <br />
                    </Link>
                    <img src={diagram} alt="" height="350" width="300"/>
                    <br />
                    {/* <CommentForm/> */}
                </p>
            </div>
        )
    }  
}


export default AttemptItem
