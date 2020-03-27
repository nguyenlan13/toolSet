import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAttempt } from '../actions/attempt'
import { getLessonAttempts } from '../actions/attempt'
import AttemptItem  from '../components/Attempt/AttemptItem'
import AttemptForm from '../components/Attempt/AttemptForm'
import moment from "moment"
// import CommentContainer from './CommentContainer'
// import Comment from '../components/Comment/Comment'
// import { withRouter } from 'react-router-dom'


class AttemptContainer extends Component {

    state = {
        attempt_number: 1
    }

    componentDidMount() {
        // this.props.get_attempts()
        const lessonId = this.props.match.params.lessonId
        this.props.get_lesson_attempts(this.props.csrf_token, lessonId)
    }


    submitHandler = async (content, diagram) => {
        const lessonId = this.props.match.params.lessonId
        // attempt_number increment 1
        this.setState(prevState => ({
            attempt_number: prevState.attempt_number + 1
        }))
        await this.props.add_attempt(this.props.csrf_token, content, diagram, this.state.attempt_number, lessonId)
    }

    render() {
        const { lessonAttempts } = this.props
        // const lessonDescription = lessonAttempts.map(attempt => {
        //     return attempt.lesson.description.toUpperCase()
        // })
        return(
            <div className="page">
                {/* <h1 className="headlines">{lessonDescription[0]}</h1> */}
                <h1 className="headlines">LESSON ATTEMPTS:</h1>
                < AttemptForm handleSubmit={this.submitHandler}/>
                    {lessonAttempts.map(attempt => {
                        return <AttemptItem 
                            content={attempt.content} 
                            diagram={attempt.diagram}
                            attempt_number={attempt.attempt_number}
                            key={attempt.id} 
                            attemptId={attempt.id}
                            lessonId={attempt.lesson_id}
                            timeStamp={moment(attempt.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                            // attemptComments={CommentContainer}
                        />
                    }) } 
                    {/* <Comment/> */}
                      {/* <CommentContainer /> */}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const {  attempts, csrf_token, user} = state;
    return { 
        lessonAttempts: attempts.lessonAttempts,
        csrf_token: csrf_token,
        user: user
    }
}

const mapDispatchToProps = dispatch => ({
    add_attempt: (csrf_token, content, diagram, attemptNumber, lessonId) => dispatch(addAttempt(csrf_token, content, diagram, attemptNumber, lessonId)),
    get_lesson_attempts: (csrf_token, lessonId) => dispatch(getLessonAttempts(csrf_token, lessonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AttemptContainer)
