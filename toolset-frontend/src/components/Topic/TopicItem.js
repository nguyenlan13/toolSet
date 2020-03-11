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


class TopicItem extends Component {


    onClick = async (csrf_token, topicId) => {

        await this.props.get_topic_lessons(csrf_token, topicId)
    }

    render(){
        const {csrf_token, topicName, topicId} = this.props
        // if (this.props.category.topics){
            return(
                <div>
                    <p>
                        <Link className="link-color" onClick={() => this.onClick(csrf_token, topicId)} to={`/topics/${topicId}/lessons`}>
                            {topicName}
                        </Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(TopicItem)