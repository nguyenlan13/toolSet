import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { GET_CSRF_TOKEN } from '../actionTypes'
import { getTopicLessons } from '../actions/lesson'
import { addLesson } from '../actions/lesson'
import TopicLessons from '../components/Topic/TopicLessons'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'

class LessonContainer extends Component {

    componentDidMount(){
        this.props.get_topic_lessons()
    }


    submitHandler = async (description) => {
        await this.props.add_add(this.props.csrf_token, description)
    }

    render(){
        const { lessons } = this.props
            return(
                <div>
                    <h1>Lessons:</h1>
                    <TopicLessons>
                    < LessonForm handleSubmit={this.submitHandler}/>
                        {lessons.map(lesson => {
                            return <LessonItem 
                                description={lesson.description} 
                                key={lesson.id} 
                                id={lesson.id} 
                            />
                        })}

                    </TopicLessons>
                   
                </div>
            )     
    }
}


const mapStateToProps = (state) => {
    const { lesson, csrf_token } = state;
    return { topicLessons: lesson, csrf_token}
}


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_topic_lessons: () => dispatch(getTopicLessons()),
    add_lesson: (csrf_token, description) => dispatch(addLesson(csrf_token, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
