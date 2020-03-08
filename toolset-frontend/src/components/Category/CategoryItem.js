import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategoryTopics } from '../../actions/category'
import  CategoryTopics  from './CategoryTopics'
// import { useParams } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// import { 
//     BrowserRouter as Router,
//     // Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'
// function CategoryItem(props) {
// console.log(props)
//     // let { c_id } = useParams();

//     let {name, id} = props
 

//     const onClick = async (event) => {
//         // event.preventDefault();
//         // await props.get_category_topics()
//     }


const categoryItem = ({name, id}) => {
    return(
        <div>
            <p>
                {/* <Link onClick={onClick} params={{c_id: id}} to={`/categories/${c_id}/topics`}> */}
                <Link  to={`/categories/${id}/topics`}>
                {name}
                </Link>
            </p>
        </div>
    )
}

// export default CategoryItem

// const mapStateToProps = (state) => {
//     console.log(state)
//     const { category, topics, csrf_token} = state;
//     return { categories: category, topics, csrf_token}
// }


// const mapDispatchToProps = dispatch => ({
// //     // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
// //     // get_categories: () => dispatch(getCategories()),
// //     // add_category: (csrf_token, name) => dispatch(addCategory(csrf_token, name))
//     get_category_topics: (csrf_token, id) => dispatch(getCategoryTopics(csrf_token, id))
// })

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(categoryItem))
export default categoryItem