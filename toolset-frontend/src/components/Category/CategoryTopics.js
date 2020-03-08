// import React, { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategoryTopics } from '../../actions/category'
import { useParams } from 'react-router-dom'
import TopicItem from '../Topic/TopicItem'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'
function CategoryTopics (props){
console.log(props)
    // componentDidMount() {
    //     this.props.get_category_topics()
    //     // console.log(this.props.get_category_topics)
    // }


    // render(){
        // const {name, id} = props
        let { cid } = useParams();
        // const category = props.categories.categories.find(category => category.id === parseInt(cid))
        return(
            <div>
                <p>
                    {/* <h2>{category.name}</h2> */}
                    {/* {category.get_category_topics}
                    {category.topics.map(topic => {
                            return <TopicItem 
                                // name={topic.name} 
                                // key={topic.id} 
                                // id={topic.id} 
                            />
                            
                        })} */}
                  {/* <Link >
                    {name}
                    </Link> */}
                </p>
            </div>
        )
      
    // }
}

const mapStateToProps = (state) => {
    console.log(state)
    const { category, topics, csrf_token} = state;
    return { categories: category, topics, csrf_token}
}


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_category_topics: (csrf_token, id) => dispatch(getCategoryTopics(csrf_token, id))
    // get_category_topics: () => dispatch(getCategoryTopics())
})



// export default CategoryTopics
export default connect(mapStateToProps, mapDispatchToProps)(CategoryTopics)