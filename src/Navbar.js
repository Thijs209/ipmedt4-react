import { getActiveElement } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React from "react";
import "./Navbar.css";

class Navbar extends React.Component{

    logoutSubmit = (e) => {
        e.preventDefault();

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
                    <section><a className="nav__a" href="/home"><p className="nav__a__p">Home</p></a></section>
                    <section><a className="nav__a" href="/scoreboard"><p className="nav__a__p">Scoreboard</p></a></section>
                    <section><a className="nav__a" href="/register"><p className="nav__a__p">Aanmelden</p></a></section>
                    <section> <a className="nav__a" href="/login"><p className="nav__a__p">Login</p></a></section>
                </nav>
            )
        } else {
            return (
                <nav className="nav">
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