import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { getTopicLessons } from '../../actions/topic'
// import  LessonItem  from '../../components/Lesson/LessonItem'

class TopicItem extends Component {


    // onClick = async (csrf_token, topicId) => {
    //     await this.props.get_topic_lessons(csrf_token, topicId)
    //     console.log(csrf_token, topicId)
    // }
        

    render(){
        const {topicName, topicId, key} = this.props
        console.log(this.props)
            return(
                <div >
                    <p>
                        {/* <Link className="link-color" onClick={() => this.onClick(csrf_token, topicId)} to={`/topics/${topicId}/lessons`}> */}
                        {/* <li> */}
                            <Link className="link-color" to={`/topics/${topicId}/lessons`}>
                                {topicName}
                            </Link>
                        {/* </li> */}
                        {/* {topicLessons} */}
                        </p>
                </div>
            )
        }     
}
    

const mapStateToProps = (state) => {
    const { categories, topics, lessons, csrf_token, user} = state;
    return { categories, topics, lessons, csrf_token, user}
    // const { category, topic, lesson, csrf_token, user} = state;
    // return { categories: category, topics: topic, lessons: lesson, csrf_token, user}
}


// const mapDispatchToProps = dispatch => ({
//     get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TopicItem)
export default connect(mapStateToProps)(TopicItem)