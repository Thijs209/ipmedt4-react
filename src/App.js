import React from "react";
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./auth/Profile";
import Scoreboard from "./Scoreboard";

import Aanmeld from "./Aanmeld";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Notifications from "./Notifications";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

class App extends React.Component{

    render () {
        return (
            
            <main className="App">
            <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/profiel" component={Profile}/>

                        <Route exact path="/scoreboard" component={Scoreboard}/>

                        <Route path="/register">
                            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
                        </Route>
                        <Route path="/login">
                            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
                        </Route>
                        
                    </Switch>
                </Router>
            </main>
        )
    }
}

export default App;