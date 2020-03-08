import React from "react";
import { Link } from 'react-router-dom'
import CategoryItem from './CategoryItem'

const Categories = (props) => {


    const category = props.categories.map(category => 
        <CategoryItem
            key={category.id}
            name={category.name}
            id={category.id}
            />
        )
        return(
            <div>
                <p>
                    <Link  to={`/categories/${id}/topics`}>
                        {category}
                    </Link>
                </p>
            </div>
        )
    }
}


export default Categories