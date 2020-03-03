import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import Layout from './components/Layout/Layout'
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import TopicContainer from "./containers/TopicContainer";
import CategoryContainer from "./containers/CategoryContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import { getToken } from './actions/authSetup'
import './App.css';
// import { render } from 'react-dom';


class App extends Component {

    componentDidMount(){
        this.props.getToken()
    }

// function App() {
    render() {
        return (
            <Router>
                <div className="App">
                    <Layout>
                        <Navbar/>
                        <Switch>
                            <Route path="/" exact component={HomeContainer} />
                            <Route path="/profile" component={ProfileContainer} />
                            <Route path="/categories" component={CategoryContainer} />
                            <Route path="/topics" component={TopicContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/signup" component={SignupContainer} />
                        </Switch>
                    </Layout>
                </div>
            </Router>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    getToken: () => dispatch(getToken())
})


export default connect(null, mapDispatchToProps)(App);
