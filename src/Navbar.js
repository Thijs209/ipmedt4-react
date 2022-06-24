import { getActiveElement } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React from "react";
import "./Navbar.css";
import logo from './assets/beweegminuut-logo.png';

class Navbar extends React.Component{  
    state = {loading: false}

    logoutSubmit = (e) => {
        e.preventDefault();
        this.setState({loading:true})

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token', res.data.token);
                localStorage.removeItem('auth_name', res.data.username);
                window.location.replace("/");
            } else {

            }
        });
    }
    
    render () {
        if (!localStorage.getItem('auth_token')) {
            return (
                <nav className="nav">
                    <section><a className="nav__banner" href="/home"><figure><img src={logo} alt="nationale beweegminuut logo"></img></figure></a></section>
                    <section></section>
                    <section><a className="nav__a" href="/home"><p className="nav__a__p">Home</p></a></section>
                    <section><a className="nav__a" href="/scoreboard"><p className="nav__a__p">Scoreboard</p></a></section>
                    <section><a className="nav__a" href="/register"><p className="nav__a__p">Aanmelden</p></a></section>
                    <section> <a className="nav__a" href="/login"><p className="nav__a__p">Login</p></a></section>
                </nav>
            )
        } else if (this.state.loading){
            return(
                <nav className="nav">
                    <section><a className="nav__banner" href="/home"><figure><img src={logo} alt="nationale beweegminuut logo"></img></figure></a></section>
                    <section></section>
                    <section><a className="nav__a" href="/home"><p className="nav__a__p">Home</p></a></section>
                    <section><a className="nav__a" href="/scoreboard"><p className="nav__a__p">Scoreboard</p></a></section>
                    <section><a className="nav__a" href="/profiel"><p className="nav__a__p">Profiel</p></a></section>
                    <section><a className="nav__a" href="/logout" onClick={this.logoutSubmit}><p className="nav__a__p">Logout</p></a></section>
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    <div className="overlay"></div>
                </nav>
            )
        } else {
            return (
                <nav className="nav">
                    <section><a className="nav__banner" href="/home"><figure><img src={logo} alt="nationale beweegminuut logo"></img></figure></a></section>
                    <section></section>
                    <section><a className="nav__a" href="/home"><p className="nav__a__p">Home</p></a></section>
                    <section><a className="nav__a" href="/scoreboard"><p className="nav__a__p">Scoreboard</p></a></section>
                    <section><a className="nav__a" href="/profiel"><p className="nav__a__p">Profiel</p></a></section>
                    <section><a className="nav__a" href="/logout" onClick={this.logoutSubmit}><p className="nav__a__p">Logout</p></a></section>
                </nav>
            )
        }
    }
}

export default Navbar;