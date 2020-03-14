import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class LessonItem extends Component {

    render(){
        const {description, lessonId} = this.props
        return(
            <div>
                <p>
                    <Link className="link-color" to={`/lessons/${lessonId}/attempts`}>
                        {description}
                    </Link>
                </p>
            </div>
        )
    }
}
    

// const mapStateToProps = (state) => {
//     const { lessons, csrf_token, user } = state;
//     return { 
//         lessons: lessons.lessons, 
//         topicLessons: lessons.topicLessons,
//         csrf_token: csrf_token, 
//         user: user
//     }
// }

// export default connect(mapStateToProps)(LessonItem)
export default LessonItem