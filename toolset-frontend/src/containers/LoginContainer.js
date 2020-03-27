import React, {Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/Login/LoginForm';
import { login } from '../actions/user'
import { withRouter } from 'react-router-dom'
import { getToken } from '../actions/authSetup'
// import { GET_CSRF_TOKEN } from '../actionTypes'
// import { Redirect } from 'react-router-dom'


class LoginContainer extends Component {

    componentDidMount(){
        this.props.get_token()
    }
    
    submitHandler = async (email, password) => {
        await this.props.login(this.props.csrf_token, email, password)
        this.props.history.push("/profile")
    }
    
    render(){
        return(
            <div className="page">
            <h1 className="headlines">LOG IN:</h1>
                <LoginForm handleSubmit={this.submitHandler}/>
            </div>
        )
    }
}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})


const mapDispatchToProps = dispatch => ({
    // get_csrf_token: (csrf_token) => dispatch(dispatch => dispatch({type: GET_CSRF_TOKEN, payload: csrf_token})),
    get_token: () => dispatch(getToken()),
    login: (csrf_token, email, password) => dispatch(login(csrf_token, email, password))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))