import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTopic } from '../actions/topic'
import CategoryTopicItem  from '../components/CategoryTopic/CategoryTopicItem'
import TopicForm from '../components/Topic/TopicForm'
import { getCategoryTopics } from '../actions/topic'

class TopicContainer extends Component {

    componentDidMount(){
        let categoryId = this.props.match.params.categoryId
        this.props.get_category_topics(this.props.csrf_token, categoryId)
    }
    
    submitHandler = async (name) => {
        await this.props.add_topic(this.props.csrf_token, name)
    }

    render(){
        const { categoryTopics } = this.props
        return(
            <div>
                <h1>Topics:</h1>
                    <TopicForm handleSubmit={this.submitHandler}/>
                    {categoryTopics.map(topic => {
                        return <TopicItem
                            topicName={topic.name} 
                            key={topic.id} 
                            topicId={topic.id}
                        />
                    })}
            </div>
        )     
    }
}

const mapStateToProps = (state) => {
    const { topics, csrf_token } = state
    return { 
        topics: topics.topics, 
        categoryTopics: topics.categoryTopics, 
        loading: topics.loading,
        csrf_token: csrf_token
    }
}

const mapDispatchToProps = dispatch => ({
    add_topic: (csrf_token, name) => dispatch(addTopic(csrf_token, name)),
    get_category_topics: (csrf_token, categoryId) => dispatch(getCategoryTopics(csrf_token, categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)
