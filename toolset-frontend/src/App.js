import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Category from "./components/Category/Category";
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Layout>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/categories" component={Category} />
                    <Route path="/about" component={About} />
                </Switch>
            </Layout>
        </div>
    </Router>
  );
}

export default App;
