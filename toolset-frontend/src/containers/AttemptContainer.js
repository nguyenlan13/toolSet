import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAttempt } from '../actions/attempt'

import AttemptItem  from '../components/Attempt/AttemptItem'
import AttemptForm from '../components/Attempt/AttemptForm'


class AttemptContainer extends Component {

    state = {
        lessonId: null
    }

    componentDidMount(){
        this.setState({
            lessonId: this.props.match.params.id
        })
        // console.log(this.props)
    }


    submitHandler = async (attemptId) => {
        await this.props.add_attempt(this.props.csrf_token, attemptId)
    }

    render(){
        const { attempts } = this.props
            return(
                <div>
                    <h1>Attempts:</h1>
                    {/* <TopicLessons> */}
                    < AttemptForm handleSubmit={this.submitHandler}/>
                        {/* {lessons.map(lesson => {
                            return <AttemptItem 
                                description={lesson.description} 
                                key={lesson.id} 
                                lessonId={lesson.id}
                                userId={lesson.user_id}
                                topicId={lesson.topic_id}
                            />
                        })} */}

                    {/* </TopicLessons> */}
                   
                </div>
            )     
    }
}


const mapStateToProps = (state) => {
    const { topic, lesson, attempt, csrf_token, user} = state;
    return { topics: topic, lessons: lesson, attempts: attempt, csrf_token, user}
}

const mapDispatchToProps = dispatch => ({
    add_attempt: (csrf_token, lessonId, ) => dispatch(addAttempt(csrf_token, lessonId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AttemptContainer)
