import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class TopicItem extends Component {


    // onClick = async (csrf_token, topicId) => {
    //     await this.props.get_topic_lessons(csrf_token, topicId)
    //     console.log(csrf_token, topicId)
    // }
        

    render(){
        const {topicName, topicId} = this.props
        return(
            <div >
                <p>
                    <Link className="link-color" to={`/topics/${topicId}/lessons`}>
                        {topicName}
                    </Link>
                </p>
            </div>
        )
    }     
}
    
// const mapStateToProps = (state) => {
//     const { topics, csrf_token } = state
//     return { 
//         topics: topics.topics, 
//         categoryTopics: topics.categoryTopics, 
//         loading: topics.loading,
//         csrf_token: csrf_token
//     }
// }

// export default connect(mapStateToProps)(TopicItem)
export default TopicItem