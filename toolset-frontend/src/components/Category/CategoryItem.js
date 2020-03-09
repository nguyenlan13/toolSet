import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategoryTopics } from '../../actions/category'
import  TopicItem  from '../../components/Topic/TopicItem'
// import  categoryTopics  from './CategoryTopics'

class CategoryItem extends Component {


    onClick = async (csrf_token, id) => {
         await this.props.get_category_topics(csrf_token, id)
    }

    render(){
        const {csrf_token, name, id} = this.props
        return(
            <div>
                <p>
                    <Link onClick={() => this.onClick(csrf_token, id)} to={`/categories/${id}/topics`}>
                        <ul>{name}</ul>
                    </Link>
                    {this.props.topics.map(topic => {
                        return <TopicItem 
                            topicname={topic.name} 
                            key={topic.id} 
                            id={topic.id} 
                        />
                        
                    })}
                </p>
            </div>
        )
    }
}
    

const mapStateToProps = (state) => {
    const { category, topic, csrf_token} = state;
    return { categories: category, topics: topic, csrf_token}
}


const mapDispatchToProps = dispatch => ({
    get_category_topics: (csrf_token, id) => dispatch(getCategoryTopics(csrf_token, id))
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem)
