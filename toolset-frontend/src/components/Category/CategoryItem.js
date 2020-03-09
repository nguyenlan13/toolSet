import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategoryTopics } from '../../actions/category'
import  TopicItem  from '../../components/Topic/TopicItem'


class CategoryItem extends Component {


    onClick = async (csrf_token, categoryId) => {
        await this.props.get_category_topics(csrf_token, categoryId)
    }

    render(){
        const {csrf_token, categoryName, categoryId} = this.props
        return(
            <div>
                <p>
                    <Link onClick={() => this.onClick(csrf_token, categoryId)} to={`/categories/${categoryId}/topics`}>
                        <ul>{categoryName}</ul>
                    </Link>
                    {this.props.topics.map(topic => {
                        return <TopicItem 
                            topicName={topic.name} 
                            key={topic.id} 
                            topicId={topic.id} 
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
    get_category_topics: (csrf_token, categoryId) => dispatch(getCategoryTopics(csrf_token, categoryId))
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem)
