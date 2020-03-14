import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTopics } from '../actions/topic'
import { addTopic } from '../actions/topic'
// import { getTopicLessons } from '../actions/topic'
import TopicItem  from '../components/Topic/TopicItem'
import TopicForm from '../components/Topic/TopicForm'
import { getCategoryTopics } from '../actions/topic'

class TopicContainer extends Component {

    componentDidMount(){
        this.props.get_topics()
    }
    
    submitHandler = async (name) => {
        await this.props.add_topic(this.props.csrf_token, name)
    }

//     render(){
//         const { topics } = this.props
//         // console.log(this.props)
//         console.log(topics)
//         return(
//             <div>
//                 <h1>Topics:</h1>
//                     <TopicForm handleSubmit={this.submitHandler}/>
//                     {topics.map(topic => {
             
//                         return <TopicItem
                        
//                             topicName={topic.name} 
//                             key={"3123" + topic.id} 
//                             topicId={topic.id} 
//                             // topicLessons={topic.lessons}
//                         />
//                     })}
//             </div>
//         )     
//     }
// }
render(){
    const { categoryTopics } = this.props
    return(
        <div>
            <h1>Topics:</h1>
                <TopicForm handleSubmit={this.submitHandler}/>
                {categoryTopics.map(topic => {
         
                    return <TopicItem
                    
                        topicName={topic.name} 
                        key={"3123" + topic.id} 
                        topicId={topic.id} 
                        // topicLessons={topic.lessons}
                    />
                })}
        </div>
    )     
}
}


const mapStateToProps = (state) => {
    console.log(state)
    const { topics } = state
    return { topics: topics.topics, 
        categoryTopics: topics.categoryTopics, 
        loading: topics.loading}
    // const { categories, topics, lessons, csrf_token, user} = state;
    // return { categories, topics, lessons, csrf_token, user}
    // const { topic, lesson, csrf_token, user} = state;
    // return { topics: topic, lessons: lesson, csrf_token, user}
}


const mapDispatchToProps = dispatch => ({
    get_topics: () => dispatch(getTopics()),
    add_topic: (csrf_token, name) => dispatch(addTopic(csrf_token, name)),
    // get_topic_lessons: (csrf_token, topicId) => dispatch(getTopicLessons(csrf_token, topicId)),
    get_category_topics: (csrf_token, categoryId) => dispatch(getCategoryTopics(csrf_token, categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer)
