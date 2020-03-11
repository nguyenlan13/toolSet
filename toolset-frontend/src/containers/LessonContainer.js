import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLesson } from '../actions/lesson'
// import TopicLessons from '../components/Topic/TopicLessons'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'
import { getTopicLessons } from '../actions/topic'


class LessonContainer extends Component {

    state = {
        topicId: null
    }

    componentDidMount(){
        // this.props.get_topic_lessons()
        this.setState({
            topicId: this.props.match.params.id
        })
        // console.log(this.props)
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
                        // {(lesson => { 
                        
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


const mapStateToProps = (state) => {
    const { topic, lesson, csrf_token, user} = state;
    return { topics: topic, lessons: lesson, csrf_token, user}
}

const mapDispatchToProps = dispatch => ({
    add_lesson: (csrf_token, description, topicId, userId) => dispatch(addLesson(csrf_token, description, topicId, userId)),
    get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
