import React, {Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/Login/LoginForm';
// import { getToken } from '../actions/authSetup'
import { login } from '../actions/user'
// import { GET_CSRF_TOKEN } from '../actionTypes'


class LoginContainer extends Component {

    // async componentDidMount(){
    //     await this.props.get_token()
    // }
    
    submitHandler = async (email, password) => {
        await this.props.login(this.props.csrf_token, email, password)
    }
    
    render(){
        return(
            <div>
            <h1>Login:</h1>
           <LoginForm handleSubmit={this.submitHandler}
            />
            </div>
        )
    }
}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})


const mapDispatchToProps = dispatch => ({
    // get_csrf_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    // get_token: (csrf_token) => dispatch(getToken()),
    login: (csrf_token, email, password) => dispatch(login(csrf_token, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
