import React from "react";
import axios from 'axios';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./auth/Profile";

import Aanmeld from "./Aanmeld";
import Home from "./Home";
import Navbar from "./Navbar";
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

class App extends React.Component {
    state = {page: "home"}

    ffChecken = bloeb => {
        const BASE_URL = "localhost:8000/api/exercise/";
    };
    
    toMessages = () => {
        this.setState({page:'notifications'})
    }

    render(){
        if (this.state.page == "home"){
            return (
                <main>
                    <Navbar />
                    <Home navigation = {this.toMessages}/>
                    {/* <Aanmeld onSubmit={this.ffChecken} /> */}
                </main>
            );
        }else if(this.state.page == "notifications"){
            return (
                <article>
                    <Navbar />
                    <Notifications />
                </article>
            );
        }
        
    }
}

export default App;