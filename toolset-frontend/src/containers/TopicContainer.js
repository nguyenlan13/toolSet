import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTopics } from '../actions/topic'
import { addTopic } from '../actions/topic'
import TopicItem  from '../components/Topic/TopicItem'
// import TopicForm from '../components/Topic/TopicForm'

class TopicContainer extends Component {

    componentDidMount(){
        this.props.get_topics()
    }
    
    submitHandler = async (name) => {
        await this.props.add_topic(this.props.csrf_token, name)
    }

    render(){
        const { topics } = this.props
        const sortedTopics = topics.sort(function(a,b){
            if(a.name < b.name) {return -1;}
            if(a.name > b.name) {return 1;}
            return 0
        })
        return(
            <div className="page">
                <h1 className="headlines">TOPICS:</h1>
                    {/* <TopicForm handleSubmit={this.submitHandler}/> */}
                    {sortedTopics.map(topic => {
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
        loading: topics.loading,
        csrf_token: csrf_token
    }
}

const mapDispatchToProps = dispatch => ({
    get_topics: () => dispatch(getTopics()),
    add_topic: (csrf_token, name) => dispatch(addTopic(csrf_token, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)
