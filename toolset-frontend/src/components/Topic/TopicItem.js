// import React from "react";
// import { Link } from 'react-router-dom'

// const TopicItem = ({name, id}) => {
    
//     return(
//         <div>
//             <p>
//                 <Link to={`/topics/${id}/lessons`}>

//                 {name}

//                 </Link>
//             </p>
//         </div>
//     )
// }

// export default TopicItem


import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTopicLessons } from '../../actions/topic'
// import  LessonItem  from '../../components/Lesson/LessonItem'
import { withRouter } from 'react-router-dom'

class TopicItem extends Component {


    // onClick = async (csrf_token, topicId) => {
    //     await this.props.get_topic_lessons(csrf_token, topicId)
    //     console.log(csrf_token, topicId)
    // }
        

    render(){
        const {topicName, topicId, topicLessons} = this.props
        console.log(topicName)
            return(
                <div>
                    <p>
                        {/* <Link className="link-color" onClick={() => this.onClick(csrf_token, topicId)} to={`/topics/${topicId}/lessons`}> */}
                        <Link className="link-color" to={`/topics/${topicId}/lessons`}>
                        {/* <Link className="link-color"  
                        to={{
                            pathname:`/topics/${topicId}/lessons`, state: {csrf_token, topicId: topicId}
                            }}> */}
                            {topicName}
                        </Link>
                        {topicLessons}
                        {/* {this.props.lessons.map(lesson => {
                            return <LessonItem 
                                description={lesson.description} 
                                key={lesson.id} 
                                lessonId={lesson.id}
                                topicId={lesson.topic_id}
                                userId={lesson.user_id} 
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
    get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TopicItem))