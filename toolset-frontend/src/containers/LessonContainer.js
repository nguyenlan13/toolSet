import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { GET_CSRF_TOKEN } from '../actionTypes'
import { addLesson } from '../actions/lesson'
// import TopicLessons from '../components/Topic/TopicLessons'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'


class LessonContainer extends Component {

    state = {
        topicId: null
    }

    componentDidMount(){
        this.setState({
            topicId: this.props.match.params.id
        })
    }


    submitHandler = async (description, topicId, userId) => {
        await this.props.add_lesson(this.props.csrf_token, description, topicId, userId)
    }

    render(){
        const { lessons } = this.props
            return(
                <div>
                    <h1>Lessons:</h1>
                    {/* <TopicLessons> */}
                    < LessonForm handleSubmit={this.submitHandler}/>
                        {lessons.map(lesson => {
                            return <LessonItem 
                                description={lesson.description} 
                                key={lesson.id} 
                                lessonId={lesson.id}
                                userId={lesson.user_id}
                                topicId={lesson.topic_id}
                            />
                        })}

                    {/* </TopicLessons> */}
                   
                </div>
            )     
    }
}



// const mapStateToProps = (state) => {
//     const { lesson, csrf_token } = state;
//     return { topicLessons: lesson, csrf_token}
// }

const mapStateToProps = (state) => {
    const { topic, lesson, csrf_token, user} = state;
    return { topics: topic, lessons: lesson, csrf_token, user}
}

const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    // get_topic_lessons: () => dispatch(getTopicLessons()),
    add_lesson: (csrf_token, description, topicId, userId) => dispatch(addLesson(csrf_token, description, topicId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
