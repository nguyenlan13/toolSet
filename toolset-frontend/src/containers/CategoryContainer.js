import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/category'
import CategoryItem  from '../components/Category/CategoryItem'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'

class CategoryContainer extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //        name: []
    //     }
    // }

    async componentDidMount(){
        await this.props.get_Categories()
        // this.props.getToken()
        console.log("hello")
    }


    render(){
        categories.map((category, index) =>{
            return(
                <div>
                <h1>Categories:</h1>
               
                <CategoryItem name={category.name}/>
                </div>
            )     
        })
    
    }
  
}

const mapStateToProps = (state) => {
    const { categories } = state;
    return { categories: categories.categories}
 
}

const mapDispatchToProps = dispatch => ({
    get_categories: () => dispatch(getCategories())

})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
