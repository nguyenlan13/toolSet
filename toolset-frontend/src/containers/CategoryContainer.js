import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { GET_CSRF_TOKEN } from '../actionTypes'
import { getCategories } from '../actions/category'
import { addCategory } from '../actions/category'
import CategoryItem  from '../components/Category/CategoryItem'
import CategoryForm from '../components/Category/CategoryForm'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'

class CategoryContainer extends Component {

    componentDidMount(){
        this.props.get_categories()
    }


    submitHandler = async (name) => {
        await this.props.add_category(this.props.csrf_token, name)
    }

    render(){
        const { categories } = this.props
            return(
                <div>
                    <h1>Categories:</h1>
                        < CategoryForm handleSubmit={this.submitHandler}/>
                        {categories.map(category => {
                            return <CategoryItem 
                                name={category.name} 
                                key={category.id} 
                                id={category.id} 
                            />
                        })}
                </div>
            )     
    }
}


const mapStateToProps = (state) => {
    const { category, csrf_token } = state;
    return { categories: category, csrf_token}
}


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_categories: () => dispatch(getCategories()),
    add_category: (csrf_token, name) => dispatch(addCategory(csrf_token, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
