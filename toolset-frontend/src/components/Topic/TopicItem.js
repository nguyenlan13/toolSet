// import React from "react";
// import { Link } from 'react-router-dom'

// const TopicItem = ({name, id}) => {
    
//     return(
//         <div>
//             <p>
//                 <Link to={`/topics/${id}/lessons`}>

//                 {name}

//                 </Link>
//             </p>
//         </div>
//     )
// }

// export default TopicItem


import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTopicLessons } from '../../actions/topic'
import  LessonItem  from '../../components/Lesson/LessonItem'


class TopicItem extends Component {


    onClick = (csrf_token, id) => {
         this.props.get_topic_lessons(csrf_token, id)
    }

    render(){
        const {csrf_token, name, id} = this.props
        // if (this.props.category.topics){
            return(
                <div>
                    <p>
                        <Link onClick={() => this.onClick(csrf_token, id)} to={`/topics/${id}/lessons`}>
                            <ul>{name}</ul>
                        </Link>
                        {this.props.lessons.map(lesson => {
                            return <LessonItem 
                                description={lesson.description} 
                                key={lesson.id} 
                                id={lesson.id}
                                topicId={lesson.topic_id}
                                userId={lesson.user_id} 
                            />
                        })}
                    </p>
                </div>
            )
        }

    // }
      
}
    

const mapStateToProps = (state) => {
    const { category, topic, lesson, csrf_token, user} = state;
    return { categories: category, topics: topic, lessons: lesson, csrf_token, user}
}


const mapDispatchToProps = dispatch => ({
    get_topic_lessons: (csrf_token, id) => dispatch(getTopicLessons(csrf_token, id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TopicItem)