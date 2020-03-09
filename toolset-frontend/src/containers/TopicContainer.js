import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { GET_CSRF_TOKEN } from '../actionTypes'
import { getTopics } from '../actions/topic'
import { addTopic } from '../actions/topic'
import { getTopicLessons } from '../actions/topic'
import TopicItem  from '../components/Topic/TopicItem'
import TopicForm from '../components/Topic/TopicForm'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'

class TopicContainer extends Component {

    componentDidMount(){
        this.props.get_topics()
    }


    submitHandler = async (name) => {
        await this.props.add_topic(this.props.csrf_token, name)
    }

    render(){
        const { topics } = this.props
        console.log({topics})
            return(
                <div>
                    <h1>Topics:</h1>
                        < TopicForm handleSubmit={this.submitHandler}/>
                        {topics.map(topic => {
                            return <TopicItem 
                                name={topic.name} 
                                key={topic.id} 
                                id={topic.id} 
                            />
                        })}
                </div>
            )     
    }
}


const mapStateToProps = (state) => {
    const { topic, csrf_token } = state;
    return { topics: topic, csrf_token}
}


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_topics: () => dispatch(getTopics()),
    add_topic: (csrf_token, name) => dispatch(addTopic(csrf_token, name)),
    get_topic_lessons: () => dispatch(getTopicLessons())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)
