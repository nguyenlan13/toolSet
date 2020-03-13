import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLessons } from '../actions/lesson'
import { addLesson } from '../actions/lesson'
// import TopicLessons from '../components/Topic/TopicLessons'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'
import { getTopicLessons } from '../actions/topic'


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
        console.log("hello")
        this.props.get_lessons()
        let topicId = this.props.match.params.topicId
        // this.props.get_topic_lessons(this.csrf_token, topicId)
 
      console.log(topicId)
    }


    submitHandler = async (description) => {
        await this.props.add_lesson(this.props.csrf_token, description)
    }

    render(){
        const { lessons } = this.props
        return(
            <div>
                <h1>Lessons:</h1>
                <LessonForm handleSubmit={this.submitHandler}/>
                    {lessons.map(lesson => {                       
                        return <LessonItem 
                            description={lesson.description} 
                            key={lesson.id} 
                            lessonId={lesson.id}
                            userId={lesson.user_id}
                            topicId={lesson.topic_id}
                            // lessonAttempts={lesson.attempts}
                        />
                    })}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { topics, lessons, attempts, csrf_token, user} = state;
    return { topics, lessons, attempts, csrf_token, user}
    // const { topic, lesson, attempts, csrf_token, user} = state;
    // return { topics: topic, lessons: lesson, attempts, csrf_token, user}
}

const mapDispatchToProps = dispatch => ({
    get_lessons: () => dispatch(getLessons()),
    add_lesson: (csrf_token, description) => dispatch(addLesson(csrf_token, description)),
    get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
