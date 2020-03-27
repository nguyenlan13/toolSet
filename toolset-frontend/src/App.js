import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import Layout from './components/Layout/Layout'
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import TopicContainer from "./containers/TopicContainer";
import TopicLessonContainer from "./containers/TopicLessonContainer";
import LessonContainer from "./containers/LessonContainer";
import AttemptContainer from "./containers/AttemptContainer";
import CategoryTopicContainer from "./containers/CategoryTopicContainer";
import CategoryContainer from "./containers/CategoryContainer";
import CommentContainer from "./containers/CommentContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import { getToken } from './actions/authSetup';
import './App.css';
import NotFound from './components//NotFound'
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
                    <Layout className="page">
                        <Navbar/>
                        <Switch>
                   
                            <Route 
                            path="/attempts/:attemptId/comments" 
                            render={({match}) => (<CommentContainer match={match} />)} />

                            <Route 
                            path="/lessons/:lessonId/attempts" 
                            render={({match}) => (<AttemptContainer match={match} />)} />

                            <Route 
                            path="/topics/:topicId/lessons" 
                            render={({match}) => (<TopicLessonContainer match={match} />)} />

                            <Route 
                            path="/categories/:categoryId/topics" 
                            render={({match}) => (<CategoryTopicContainer match={match} />)} />    

                            <Route 
                            path="/users/:userId" 
                            render={({match}) => (<ProfileContainer match={match} />)} />

                            <Route exact path="/attempts" component={AttemptContainer} />
                            <Route exact path="/lessons" component={LessonContainer} />
                            <Route exact path="/topics" component={TopicContainer} /> 
                            <Route exact path="/categories" component={CategoryContainer} />

                            <Route path="/profile" component={ProfileContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/signup" component={SignupContainer} />
                            <Route exact path="/" component={HomeContainer} />
                            <Route component={NotFound}/>
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

// export default App;
export default connect(null, mapDispatchToProps)(App);
