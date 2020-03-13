import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { GET_CSRF_TOKEN } from '../actionTypes'
import { getTopics } from '../actions/topic'
import { addTopic } from '../actions/topic'
import { getTopicLessons } from '../actions/topic'
import TopicItem  from '../components/Topic/TopicItem'
import TopicForm from '../components/Topic/TopicForm'
import { getCategoryTopics } from '../actions/category'


class TopicContainer extends Component {

    // state = {
    //     categoryId: null
    // }

    componentDidMount(){
        let categoryId = this.props.match.params.categoryId
        // this.props.get_category_topics(this.props.csrf_token, categoryId)
        this.props.get_topics()
        // this.setState({
        //     categoryId: this.props.match.params.topicId
        // })
        console.log(categoryId)
    }
    
    submitHandler = async (name) => {
        await this.props.add_topic(this.props.csrf_token, name)
    }

    render(){
        console.log(this.props)
        const { topics } = this.props
        console.log(topics)
        return(
            <div>
                <h1>Topics:</h1>
                    < TopicForm handleSubmit={this.submitHandler}/>
                    {topics.map(topic => {
                        return <TopicItem 
                            topicName={topic.name} 
                            key={topic.id} 
                            topicId={topic.id}
                            topicLessons={topic.lessons}
                        />
                    })}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { topic, lesson, csrf_token, user} = state;
    return { topics: topic, lessons: lesson, csrf_token, user}
}


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_topics: () => dispatch(getTopics()),
    add_topic: (csrf_token, name) => dispatch(addTopic(csrf_token, name)),
    // get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId)),
    get_category_topics: (csrf_token, categoryId) => dispatch(getCategoryTopics(csrf_token, categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)
