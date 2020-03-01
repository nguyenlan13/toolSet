import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import Profile from "./components/Profile/Profile";
// import Topic from "./components/Topic/TopicForm";
// import Category from "./components/Category/CategoryForm";
import About from "./components/About/About";
// import Login from "./components/Login/LoginForm";
// import Signup from "./components/Signup/SignupForm";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import TopicContainer from "./containers/TopicContainer";
import CategoryContainer from "./containers/CategoryContainer";
// import About from "./components/About/About";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import './App.css';

function App() {
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

export default App;
