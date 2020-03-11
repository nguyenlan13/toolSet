import React from 'react'
import Aux from '../../hoc/Aux'
import { Link } from 'react-router-dom'

const layout= (props) => (
    <Aux>
        <div>  
            <Link className="nav-link" to="/login">
                <div>LOG IN</div>
            </Link>
            <Link className="nav-link" to="/signup">
                <div>SIGN UP</div>

            </Link></div>
        
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout