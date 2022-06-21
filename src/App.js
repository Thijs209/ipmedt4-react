import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./auth/Profile";
import Scoreboard from "./Scoreboard";

import Firebase, {fetchToken} from "./firebase/Firebase";

import Navbar from "./components/Navbar";

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

    allowAccess = (e) => {
        const [isTokenFound, setTokenFound] = useState(false);
        fetchToken(setTokenFound);
    }

    render () {
        this.allowAccess();
        return (
            
            <main className="App">

            <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/scoreboard" component={Scoreboard}/>
                        <Route exact path="/scoreboard" component={Scoreboard}/>

                        <Route path="/register">
                            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
                        </Route>
                        <Route path="/login">
                            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
                        </Route>
                        
                    </Switch>
                </Router>
                {/* <Button onClick={() => setShow(true)}>Show Toast</Button> */}
            </main>
        )
    }
}

export default App