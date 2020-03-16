import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/category'
import { addCategory } from '../actions/category'
import CategoryItem  from '../components/Category/CategoryItem'
import CategoryForm from '../components/Category/CategoryForm'


class CategoryContainer extends Component {

    componentDidMount(){
        this.props.get_categories()
    }

    submitHandler = async (name) => {
        await this.props.add_category(this.props.csrf_token, name)
    }

    render(){
        const { categories } = this.props
        const sortedCategories = categories.sort(function(a,b){
            if(a.name < b.name) {return -1;}
            if(a.name > b.name) {return 1;}
            return 0
        })
        return(
            <div className="page">
                <h1 className="headlines">CATEGORIES:</h1>
                    < CategoryForm handleSubmit={this.submitHandler}/>
                    {sortedCategories.map(category => {
                        return <CategoryItem 
                            categoryName={category.name} 
                            key={category.id} 
                            categoryId={category.id}
                        />
                    })}
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { categories, csrf_token } = state;
    return { 
        categories: categories.categories,
        loading: categories.loading,
        csrf_token: csrf_token
    }
}


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_categories: () => dispatch(getCategories()),
    add_category: (csrf_token, name) => dispatch(addCategory(csrf_token, name)),
    // get_category_topics: (csrf_token, categoryId) => dispatch(getCategoryTopics(csrf_token, categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
