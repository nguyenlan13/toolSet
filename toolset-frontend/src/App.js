import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Topic from "./components/Topic/TopicForm";
import Category from "./components/Category/Category";
import About from "./components/About/About";
import Login from "./components/Login/LoginForm";
import Signup from "./components/Signup/SignupForm";
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Layout>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/categories" component={Category} />
                    <Route path="/topics" component={Topic} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </Layout>
        </div>
    </Router>
  );
}

export default App;
