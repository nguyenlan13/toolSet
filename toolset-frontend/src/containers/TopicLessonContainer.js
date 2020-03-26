import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLesson } from '../actions/lesson'
import { getTopicLessons } from '../actions/lesson'
import LessonItem  from '../components/Lesson/LessonItem'
import LessonForm from '../components/Lesson/LessonForm'

class TopicLessonContainer extends Component {

    componentDidMount(){
        let topicId = this.props.match.params.topicId
        
        this.props.get_topic_lessons(this.props.csrf_token, topicId)
    }


    submitHandler = async (description) => {
        let topicId = this.props.match.params.topicId
        await this.props.add_lesson(this.props.csrf_token, description, topicId)
    }

    render(){
        const { topicLessons } = this.props
        // const topicName = topicLessons.map(lesson => {
        //     return lesson.topic.name.toUpperCase()
        // })
        const sortedTopicLessons = topicLessons.sort(function(a,b){
            if(a.description < b.description) {return -1;}
            if(a.description > b.description) {return 1;}
            return 0
        })
        return(
            <div className="page">
            {/* <h1 className="headlines">{topicName[0]}</h1> */}
            <h1 className="headlines">LESSONS:</h1>
                <LessonForm handleSubmit={this.submitHandler}/>
                    {sortedTopicLessons.map(lesson => {                       
                        return <LessonItem 
                            description={lesson.description} 
                            key={lesson.id} 
                            lessonId={lesson.id}
                            userId={lesson.user_id}
                            topicId={lesson.topic_id}
                            userName={lesson.user.name}
                        />
                    })}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { lessons, csrf_token, user } = state;
    return { 
        topicLessons: lessons.topicLessons,
        csrf_token: csrf_token, 
        user: user
    }
}

const mapDispatchToProps = dispatch => ({
    add_lesson: (csrf_token, description, topicId) => dispatch(addLesson(csrf_token, description, topicId)),
    get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicLessonContainer)
