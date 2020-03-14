import React, { Component } from "react";
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'


class AttemptItem extends Component {


    render(){
        const {content, diagram, attemptNumber} = this.props
        return(
            <div>
                <p>
                    {/* <Link className="link-color" onClick={() => this.handleClick(csrf_token, description, lessonId)} to={`/lessons/${lessonId}/attempts`}> */}
                    {/* <Link className="link-color"> */}
                        {attemptNumber} - {content} - {diagram}
                        
                        
                    {/* </Link> */}

                </p>
            </div>
        )
    }  
}

// const mapStateToProps = (state) => {
//     const { attempts, csrf_token, user} = state;
//     return { 
//         attempts: attempts.attempts,
//         lessonAttempts: attempts.lessonAttempts,
//         csrf_token: csrf_token,
//         user: user
//     }
// }

export default AttemptItem
// export default connect(mapStateToProps)(AttemptItem)