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
import { getLessonAttempts } from '../../actions/lesson'
// import  AttemptItem  from '../../components/Attempt/AttemptItem'


class LessonItem extends Component {


    handleClickClick = async (csrf_token, lessonId) => {
         await this.props.get_lesson_attempts(csrf_token, lessonId)
    }

    render(){
        const {csrf_token, description, lessonId, userId, topicId} = this.props
        console.log({description})
            return(
                <div>
                    <p>
                        <Link className="link-color" onClick={() => this.handleClick(csrf_token, description, lessonId)} to={`/lessons/${lessonId}/attempts`}>
                        {/* <Link to={`/lessons/${lessonId}/attempts`}> */}
                            {description}
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
    const { category, topic, lesson, csrf_token, user} = state;
    return { categories: category, topics: topic, lessons: lesson, csrf_token, user}
}


const mapDispatchToProps = dispatch => ({
    get_lesson_attempts: (csrf_token, lessonId) => dispatch(getLessonAttempts(csrf_token, lessonId))
})

export default connect(mapStateToProps,mapDispatchToProps)(LessonItem)