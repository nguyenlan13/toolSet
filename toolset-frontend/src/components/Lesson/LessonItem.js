import React, { Component } from "react";
import { Link } from 'react-router-dom'

class LessonItem extends Component {

    render(){

        const { description, userName, userId, lessonId} = this.props
        return(
            <div>
                <p>
                    <Link className="link-color" to={`/lessons/${lessonId}/attempts`}> {description} </Link> - <Link className="link-color" to={`/users/${userId}`}>{userName}</Link>
                
                </p>
            </div>
        )
    }
}
    

export default LessonItem