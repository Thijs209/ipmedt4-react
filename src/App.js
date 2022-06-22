import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./auth/Profile";
import Scoreboard from "./Scoreboard";
import Exercise from "./Exercise";

import Aanmeld from "./Aanmeld";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends React.Component {
    state = {video: ""}

    ffChecken = bloeb => {
        const BASE_URL = "localhost:8000/api/exercise/";
    };

    render(){
            return (
                <main>
                    <Navbar />
                    {/* <Aanmeld onSubmit={this.ffChecken} /> */}
                    <Router>
                        <Switch>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/profiel" component={Profile}/>
                            <Route exact path="/scoreboard" component={Scoreboard}/>
                            <Route exact path="/oefening" component={Exercise}/>

                            <Route path="/register">
                                {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
                            </Route>
                            <Route path="/login">
                                {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
                            </Route>
                            
                        </Switch>
                    </Router>
                </main>
            );
    }
}

export default App;