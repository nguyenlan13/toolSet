import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import Layout from './components/Layout/Layout'
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import TopicContainer from "./containers/TopicContainer";
import LessonContainer from "./containers/LessonContainer";
import AttemptContainer from "./containers/AttemptContainer";
import CategoryContainer from "./containers/CategoryContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import { getToken } from './actions/authSetup';
import CategoryItem from './components/Category/CategoryItem'
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
                            
                            <Route path="/profile" component={ProfileContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/signup" component={SignupContainer} />
                            <Route path="/categories" component={CategoryContainer} />
                            <Route path="/categories/:id/topics" component={CategoryItem} />
                            <Route path="/topics" component={TopicContainer} />
                            {/* <Route path="/topics/:id/lessons" component={TopicContainer} /> */}
                            <Route path="/lessons" component={LessonContainer} />
                            {/* <Route path="/lessons/:id/attempts" component={LessonContainer} /> */}
                            <Route path="/attempts" component={AttemptContainer} />
                            {/* <Route path="/attempts/:id/comments" component={AttemptContainer} /> */}
                           
                            <Route path="/" exact component={HomeContainer} />

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
