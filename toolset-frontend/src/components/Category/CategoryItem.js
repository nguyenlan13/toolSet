import React from "react";
import { Link } from 'react-router-dom'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'


const categoryItem = ({name, id}) => {
    return(
        <div>
            <p>
                <Link to={`categories/${id}/topics`}>
                {name}
                </Link>
            </p>
        </div>
    )
}

export default categoryItem