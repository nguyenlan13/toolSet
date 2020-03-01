// import React from "react";

// function SignupContainer() {
//   return (
//     <div>
//       <h1>Sign Up!</h1>
//       <p>Let's add some tools to your tool set!</p>
//     </div>
//   );
// }

// export default SignupContainer;

import React, {Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/Signup/SignupForm';
import { getToken } from '../actions/authSetup'
import { signup } from '../actions/user'


class SignupContainer extends Component {

    async componentDidMount(){
        await this.props.get_token()
    }
    
    submitHandler = async (email, username, name, password) => {
        await this.props.signup(this.props.csrf_token, email, username, name, password)
    }
    
    render(){
        return(
            <div>
            <h1>Sign Up!</h1>
           <SignupForm handleSubmit={this.submitHandler}
            />
            </div>
        )
    }
}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})


const mapDispatchToProps = dispatch => ({
    // get_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_token: (csrf_token) => dispatch(getToken()),
    signup: (csrf_token, email, username, name, password) => dispatch(signup(csrf_token, email, username, name, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
