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
// import CategoryItem from './components/Category/CategoryItem'
// import TopicItem from './components/Topic/TopicItem'
// import LessonItem from './components/Lesson/LessonItem'
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
                   
                            <Route 
                            path="/lessons/:lessonId/attempts" 
                            render={({match}) => (<AttemptContainer match={match} />)} />

                            <Route 
                            path="/topics/:topicId/lessons" 
                            render={({match}) => (<LessonContainer match={match} />)} />

                            <Route 
                            path="/categories/:categoryId/topics" 
                            render={({match}) => (<TopicContainer match={match} />)} />    


                            {/* <Route 
                            exact
                            path="/categories/:categoryId/topics" 
                        render={(props) => <TopicContainer key={this.props.match.params.categoryId}/> /> */}

                            <Route exact path="/lessons" component={LessonContainer} />
                            <Route exact path="/topics" component={TopicContainer} /> 
                            <Route exact path="/categories" component={CategoryContainer} />
                            
                            {/* <Route exact path="/attempts" component={AttemptContainer} /> */}
                            {/* <Route path="/attempts/:attemptId/comments" component={AttemptContainer} /> */}

                            <Route path="/profile" component={ProfileContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/signup" component={SignupContainer} />
                            <Route exact path="/" component={HomeContainer} />
                        
                           

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
