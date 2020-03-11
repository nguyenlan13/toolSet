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
                            path="/topics/:topicId/lessons" 
                            component={({match}) => (<LessonContainer match={match} />)} />
                            
                           
                            <Route 
                            path="/categories/:categoryId/topics" 
                            component={({match}) => (<TopicContainer match={match} />)} />
                            
                       
                            <Route path="/categories" exact component={CategoryContainer} />
                            <Route path="/lessons" exact component={LessonContainer} />
                            <Route path="/topics" exact component={TopicContainer} />
                            {/* <Route path="/lessons/:lessonId/attempts" component={LessonItem} /> */}
                            {/* <Route path="/attempts" component={AttemptContainer} /> */}
                            {/* <Route path="/attempts/:id/comments" component={AttemptContainer} /> */}
                            <Route path="/profile" component={ProfileContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/signup" component={SignupContainer} />
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
