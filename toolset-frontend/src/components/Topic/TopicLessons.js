import React from "react";
import { Link} from 'react-router-dom'
// import { 
//     BrowserRouter as Router,
//     Link,
//     Route, 
//     Switch,
//     useRouteMatch
// } from 'react-router-dom'


const topicLessons = ({description, id}) => {
    return(
        <div>
            <p>
                <Link to={`lessons/${id}/attempts`}>
                {description}
                </Link>
            </p>
        </div>
    )
}

export default topicLessons