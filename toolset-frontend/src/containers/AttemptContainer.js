import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getAttempts } from '../actions/attempt'
import { addAttempt } from '../actions/attempt'
import { getLessonAttempts } from '../actions/attempt'
import AttemptItem  from '../components/Attempt/AttemptItem'
import AttemptForm from '../components/Attempt/AttemptForm'
import DoodleItem from '../components/DoodleItem'
import CommentContainer from './CommentContainer'
import Comment from '../components/Comment/Comment'

class AttemptContainer extends Component {


    componentDidMount() {
        // this.props.get_attempts()
        const lessonId = this.props.match.params.lessonId
        this.props.get_lesson_attempts(this.props.csrf_token, lessonId)
    }

    // submitHandler = async (content, diagram, attemptNumber) => {
    submitHandler = async (content, diagram) => {
        const lessonId = this.props.match.params.lessonId
        await this.props.add_attempt(this.props.csrf_token, content, diagram, lessonId)
    }

    render() {
        const { lessonAttempts } = this.props
        console.log(this.props)
        return(
            <div className="page">
                <h1 className="headlines">LESSON ATTEMPTS:</h1>
                {/* < DoodleItem /> */}
                < AttemptForm handleSubmit={this.submitHandler}/>
                    {lessonAttempts.map(attempt => {
                        return <AttemptItem 
                            content={attempt.content} 
                            diagram={attempt.diagram}
                            attemptNumber={attempt.attempt_number}
                            key={attempt.id} 
                            attemptId={attempt.id}
                            lessonId={attempt.lesson_id}
                            timeStamp={attempt.created_at}
                        />
                    }) } 
                    {/* <Comment/> */}
                      {/* <CommentContainer />                */}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { attempts, csrf_token, user} = state;
    return { 
        attempts: attempts.attempts,
        lessonAttempts: attempts.lessonAttempts,
        csrf_token: csrf_token,
        user: user
    }
}

const mapDispatchToProps = dispatch => ({
    // get_attempts: () => dispatch(getAttempts()),
    add_attempt: (csrf_token, content, diagram, attemptNumber, lessonId) => dispatch(addAttempt(csrf_token, content, diagram, attemptNumber, lessonId)),
    get_lesson_attempts: (csrf_token, lessonId) => dispatch(getLessonAttempts(csrf_token, lessonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AttemptContainer)
