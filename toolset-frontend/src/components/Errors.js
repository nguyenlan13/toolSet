import React from 'react'

const Errors = ({errors}) => {
    return (
        <div className="errors">
            {errors.map( error => <li>{error}</li> )}
        </div>
    )
}

export default Errors
