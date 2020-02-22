import React from 'react'
import Aux from '../../hoc/Aux'

const layout= (props) => (
    <Aux>
        <div>Navbar - Login, Signup, Categories Search bar</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout