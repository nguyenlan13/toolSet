import React, { Component } from "react";
import { Link } from 'react-router-dom'


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
    
export default CategoryItem