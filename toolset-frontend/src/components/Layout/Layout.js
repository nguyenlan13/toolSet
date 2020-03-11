import React from 'react'
import Aux from '../../hoc/Aux'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'

const layout= (props) => (
    <Aux>
        <div>  
            <Link className="layout-link" to="/login"> LOG IN </Link> | <Link className="layout-link" to="/signup"> SIGN UP </Link> <SearchBar className="headline-md"/>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout