import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomeGridView} from './components/home/homeGrid/homeGridView'
import Header from './components/home/header/header'
import Login from "./components/login/main";
import About from "./components/home/pages/about"
import PageNotFound from "./components/home/pages/pageNotFound";
import EventView from "./components/home/event/eventView";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CreateEvent from "./components/home/event/createEvent";
import DetailedEventView from "./components/home/event/detailedEvent/detailedEventView";
import useToken from './components/login/useToken';
import Birthday from './components/home/birthday/birthday'

function App() {
    const {removeToken, token, setToken } = useToken();
    if (!token) {
        return <Login setToken={setToken}/>
    }
    return (
        <>
            <Router>
                <Header removeToken={removeToken}/>
                <Switch>
                    <Route exact path="/" component={HomeGridView}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/event" component={EventView}/>
                    <Route exact path="/birthday" component={Birthday}/>
                    <Route exact path="/event/create" component={CreateEvent}/>
                    <Route exact path="/event/:id" component={DetailedEventView}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
