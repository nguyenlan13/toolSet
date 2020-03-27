import React, { Component } from 'react';
import { connect } from 'react-redux'
import Aux from '../../hoc/Aux'
import { Link } from 'react-router-dom'
import { logout } from './../../actions/user'
import SearchBar from '../SearchBar'
import { withRouter } from 'react-router-dom'

class Layout extends Component {

    handleLogout = async () => {
        await this.props.logout(this.props.csrf_token);
        this.props.history.push("/")
      };


    render(){
        if(this.props.authenticated) {
            return(
                <Aux>
                    <div style={{marginLeft: "60%"}}>
                        <Link className="layout-link" to="/logout" onClick={this.handleLogout}> LOG OUT </Link> <SearchBar className="headline-md"/>
                    </div>
                    <main >
                        {this.props.children}
                    </main>
                </Aux>
            )
        }else {
            return(
                <Aux>
                    <div style={{marginLeft: "60%"}}>
                        <Link className="layout-link" to="/login"> LOG IN </Link> | <Link className="layout-link" to="/signup"> SIGN UP </Link> <SearchBar className="headline-md"/>
                    </div>
                    <main >
                        {this.props.children}
                    </main>
                </Aux>
            )
        }
    }  
    
}


const mapStateToProps = (state) => {
    const { user, csrf_token } = state;
    return { 
        authenticated: user.isAuthenticated,
        csrf_token: csrf_token
    }
}


const mapDispatchToProps = dispatch => ({
    logout: (csrf_token) => dispatch(logout(csrf_token))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))

