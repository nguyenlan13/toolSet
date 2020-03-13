import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAttempts } from '../actions/attempt'
import { addAttempt } from '../actions/attempt'
import { getLessonAttempts } from '../actions/lesson'
import AttemptItem  from '../components/Attempt/AttemptItem'
import AttemptForm from '../components/Attempt/AttemptForm'


class AttemptContainer extends Component {


    componentDidMount() {
        const lessonId = this.props.match.params.lessonId
        // this.props.get_lesson_attempts(this.props.csrf_token, lessonId)
        this.props.get_attempts()
    }

    submitHandler = async (attemptId, ) => {
        await this.props.add_attempt(this.props.csrf_token, attemptId)
    }

    render() {
        const { attempts } = this.props
            return(
                <div>
                    <h1>Lesson Attempts:</h1>

                    < AttemptForm handleSubmit={this.submitHandler}/>
                        {attempts.map(attempt => {
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
    const { topics, lessons, attempts, csrf_token, user} = state;
    return { topics, lessons, attempts, csrf_token, user}
    // const { topic, lesson, attempts, csrf_token, user} = state;
    // return { topics: topic, lessons: lesson, attempts, csrf_token, user}
}

const mapDispatchToProps = dispatch => ({
    get_attempts: () => dispatch(getAttempts()),
    get_lesson_attempts: (csrf_token, lessonId) => dispatch(getLessonAttempts(csrf_token, lessonId)),
    add_attempt: (csrf_token, lessonId, ) => dispatch(addAttempt(csrf_token, lessonId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AttemptContainer)
