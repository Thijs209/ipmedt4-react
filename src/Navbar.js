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
                <nav class="nav">
                    <section><a class="nav__a" href="/home"><p class="nav__a__p">Home</p></a></section>
                    <section><a class="nav__a" href="/scoreboard"><p class="nav__a__p">Scoreboard</p></a></section>
                    <section><a class="nav__a" href="/register"><p class="nav__a__p">Aanmelden</p></a></section>
                    <section> <a class="nav__a" href="/scoreboard"><p class="nav__a__p">Scoreboard</p></a></section>
                </nav>
            )
        } else {
            return (
                <nav class="nav">
                    <a class="nav__a" href="/home"><p class="nav__a__p">Home</p></a>
                    <a class="nav__a" href="/scoreboard"><p class="nav__a__p">Scoreboard</p></a>
                    <a class="nav__a" href="/profiel"><p class="nav__a__p">Profiel</p></a>
                    <a class="nav__a" href="/logout" onClick={this.logoutSubmit}><p class="nav__a__p">Logout</p></a>
                </nav>
            )
        }
    }
}

export default Navbar;