import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getLessons } from '../actions/lesson'
import { addLesson } from '../actions/lesson'
import { getTopicLessons } from '../actions/lesson'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'

class LessonContainer extends Component {

    componentDidMount(){
        // this.props.get_lessons()
        let topicId = this.props.match.params.topicId
        this.props.get_topic_lessons(this.props.csrf_token, topicId)
    }


    submitHandler = async (description) => {
        let topicId = this.props.match.params.topicId
        console.log(topicId)
        await this.props.add_lesson(this.props.csrf_token, description, topicId)
    }

    render(){
        const { topicLessons } = this.props
        return(
            <div>
                <h1>Lessons:</h1>
                <LessonForm handleSubmit={this.submitHandler}/>
                    {topicLessons.map(lesson => {                       
                        return <LessonItem 
                            description={lesson.description} 
                            key={lesson.id} 
                            lessonId={lesson.id}
                            userId={lesson.user_id}
                            topicId={lesson.topic_id}
                        />
                    })}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { lessons, csrf_token, user } = state;
    return { 
        lessons: lessons.lessons, 
        topicLessons: lessons.topicLessons,
        csrf_token: csrf_token, 
        user: user
    }
}

const mapDispatchToProps = dispatch => ({
    // get_lessons: () => dispatch(getLessons()),
    add_lesson: (csrf_token, description, topicId) => dispatch(addLesson(csrf_token, description, topicId)),
    get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
