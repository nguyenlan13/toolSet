import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getAttempts } from '../actions/attempt'
import { addAttempt } from '../actions/attempt'
import { getLessonAttempts } from '../actions/attempt'
import AttemptItem  from '../components/Attempt/AttemptItem'
import AttemptForm from '../components/Attempt/AttemptForm'


class AttemptContainer extends Component {


    componentDidMount() {
        // this.props.get_attempts()
        const lessonId = this.props.match.params.lessonId
        this.props.get_lesson_attempts(this.props.csrf_token, lessonId)
    }

    submitHandler = async (content, diagram, attemptNumber) => {
        const lessonId = this.props.match.params.lessonId
        await this.props.add_attempt(this.props.csrf_token, content, diagram, attemptNumber, lessonId)
    }

    render() {
        const { lessonAttempts } = this.props
        return(
            <div>
                <h1>Lesson Attempts:</h1>
                < AttemptForm handleSubmit={this.submitHandler}/>
                    {lessonAttempts.map(attempt => {
                        return <AttemptItem 
                            content={attempt.content} 
                            diagram={attempt.diagram}
                            attemptNumber={attempt.attempt_number}
                            key={attempt.id} 
                            attemptId={attempt.id}
                            lessonId={attempt.lesson_id}
                        />
                    })}                   
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
