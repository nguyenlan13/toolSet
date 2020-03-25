import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLessons } from '../actions/lesson'
import LessonItem  from '../components/Lesson/LessonItem'

class LessonContainer extends Component {

    componentDidMount(){
        this.props.get_lessons()
    }


    render(){
        const { lessons } = this.props
        const sortedLessons = lessons.sort(function(a,b){
            if(a.description < b.description) {return -1;}
            if(a.description > b.description) {return 1;}
            return 0
        })
        return(
            <div className="page">
            <h1 className="headlines">LESSONS:</h1>
                    {sortedLessons.map(lesson => {                       
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
        lessons: lessons.lessons, 
        csrf_token: csrf_token, 
        user: user
    }
}

const mapDispatchToProps = dispatch => ({
    get_lessons: () => dispatch(getLessons())
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
