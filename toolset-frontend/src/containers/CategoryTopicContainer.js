import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategoryTopic } from '../actions/topic'
import TopicItem from '../components/Topic/TopicItem'
import TopicForm from '../components/Topic/TopicForm'
import { getCategoryTopics } from '../actions/topic'

class CategoryTopicContainer extends Component {

    componentDidMount(){
        let categoryId = this.props.match.params.categoryId
        this.props.get_category_topics(this.props.csrf_token, categoryId)
    }
    
    submitHandler = async (name) => {
        let categoryId = this.props.match.params.categoryId
        await this.props.add_category_topic(this.props.csrf_token, name, categoryId)
    }

    render(){
        const { categoryTopics } = this.props
        const sortedCategoryTopics = categoryTopics.sort(function(a,b){
            if(a.name < b.name) {return -1;}
            if(a.name > b.name) {return 1;}
            return 0
        })
        return(
            <div className="page">
                <h1 className="headlines"> TOPICS:</h1>
                    <TopicForm handleSubmit={this.submitHandler}/>
                    {sortedCategoryTopics.map(topic => {
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
        categoryTopics: topics.categoryTopics, 
        loading: topics.loading,
        csrf_token: csrf_token
    }
}

const mapDispatchToProps = (dispatch) => ({
    get_category_topics: (csrf_token, categoryId) => dispatch(getCategoryTopics(csrf_token, categoryId)),
    add_category_topic: (csrf_token, name, categoryId) => dispatch(addCategoryTopic(csrf_token, name, categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTopicContainer)
