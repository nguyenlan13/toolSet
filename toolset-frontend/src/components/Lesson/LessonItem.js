// import React from "react";
// import { Link } from 'react-router-dom'

// const lessonItem = ({description, id}) => {

//     return(
//         <div>
//             <p>
//                 <Link to={`/lessons/${id}/attempts`}>
//                 {description}
//                 </Link>
//             </p>
//         </div>
//     )
// }

// export default lessonItem


import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { getLessonAttempts } from '../../actions/lesson'
// import  AttemptItem  from '../../components/Attempt/AttemptItem'


class LessonItem extends Component {


    onClick = async (csrf_token, lessonId) => {
        //  await this.props.get_lesson_attempts(csrf_token, lessonId)
    }

    render(){
        const {csrf_token, description, lessonId, userId, topicId} = this.props
        // if (this.props.category.topics){
            return(
                <div>
                    <p>
                        <Link onClick={() => this.onClick(csrf_token, description, lessonId, userId, topicId)} to={`/lessons/${lessonId}/attempts`}>
                            <ul>{description}</ul>
                        </Link>
                        {/* {this.props.attempts.map(attempt=> {
                            return <AttemptItem 
                                description={lesson.description} 
                                key={attempt.id} 
                                id={attempt.id}
                                topicId={attempt.lesson_id}
                      
                            />
                        })} */}
                    </p>
                </div>
            )
        }
      
}
    

const mapStateToProps = (state) => {
    const { topic, lesson, csrf_token, user} = state;
    return { topics: topic, lessons: lesson, csrf_token, user}
}


const mapDispatchToProps = dispatch => ({
    // get_lesson_attempts: (csrf_token, lessonId) => dispatch(getLessonAttempts(csrf_token, lessonId))
})

export default connect(mapStateToProps,mapDispatchToProps)(LessonItem)