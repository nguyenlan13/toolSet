import React, {Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/Signup/SignupForm';
// import { getToken } from '../actions/authSetup'
import { signup } from '../actions/user'
// import { GET_CSRF_TOKEN } from '../actionTypes'

class SignupContainer extends Component {

    // async componentDidMount(){
    //     await this.props.get_token()
    // }
    
    submitHandler = async (email, username, name, password) => {
        await this.props.signup(this.props.csrf_token, email, username, name, password)
    }
    
    render(){
        return(
            <div className="page">
            <h1 className="headlines">SIGN UP!</h1>
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
    // get_token: (csrf_token) => dispatch(getToken()),
    signup: (csrf_token, email, username, name, password) => dispatch(signup(csrf_token, email, username, name, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
