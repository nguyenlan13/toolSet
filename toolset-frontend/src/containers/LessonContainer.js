import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLesson } from '../actions/lesson'
// import TopicLessons from '../components/Topic/TopicLessons'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'
import { getTopicLessons } from '../actions/topic'
import { getLessons } from '../actions/lesson'

class LessonContainer extends Component {

    // state = {
    //     topicId: null
    // }

    // setState() {
    //         topicId: this.props.match.params.topicId
    //     }
    // async getLessons() {
    //     await this.props.get_topic_lessons()
    // }

    componentDidMount(){
        let topicId = this.props.match.params.topicId
        // this.props.get_topic_lessons(this.csrf_token, topicId)
        this.props.get_lessons()
      
    }


    submitHandler = async (description) => {
        await this.props.add_lesson(this.props.csrf_token, description, this.props.topic, this.props.user)
    }

    render(){
        console.log(this.props)
        const { lessons } = this.props
        console.log({lessons})
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
                                lessonAttempts={lesson.attempts}
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
    get_lessons: () => dispatch(getLessons()),
    add_lesson: (csrf_token, description, topicId, userId) => dispatch(addLesson(csrf_token, description, topicId, userId)),
    get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
