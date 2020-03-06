import React from "react";
import { Link, Redirect } from 'react-router-dom'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'


const topicItem = ({name, id}) => {
    return(
        <div>
            <p>
                <Link to={`/topics/${id}/lessons`}>
                {name}
                </Link>
            </p>
        </div>
    )
}

export default topicItem