import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'


class CategoryItem extends Component {

    render(){
        const {categoryName, categoryId} = this.props
        return(
            <div>
                <p >
                    <Link className="link-color" to={`/categories/${categoryId}/topics`}>
                        {categoryName}
                    </Link>
                </p>
            </div>
        )
    }
}
    

// const mapStateToProps = (state) => {
//     const { categories } = state;
//     return { 
//         categories: categories.categories,
//         loading: categories.loading
//     }
// }

// export default connect(mapStateToProps)(CategoryItem)
export default CategoryItem