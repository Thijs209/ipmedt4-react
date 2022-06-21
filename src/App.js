import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./auth/Profile";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

class App extends React.Component{

    render () {
        return (
            <main className="App">
                <Router>
                    <Switch>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profiel" component={Profile}/>
                    </Switch>
                </Router>
            </main>
        )
    }
}

export default App