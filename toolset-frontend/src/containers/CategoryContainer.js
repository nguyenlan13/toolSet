import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        await this.props.add_category(name)
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
    const { category } = state;
    return { categories: category}
}

const mapDispatchToProps = dispatch => ({
    get_categories: () => dispatch(getCategories()),
    add_category: (name) => dispatch(addCategory(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
