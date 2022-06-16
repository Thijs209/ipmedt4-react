import React from "react";
import "./Navbar.css";

class Navbar extends React.Component{
  
    
    render(){
        /* If ingelogd, dan eerste return, anders tweede*/
        console.log("navbar ingeladen");
        if(false){
            return (
                <nav class="nav">
                    <a class="nav__a" href="/home"><p class="nav__a__p">Home</p></a>
                    <a class="nav__a" href="/register"><p class="nav__a__p">Aanmelden</p></a>
                    <a class="nav__a" href="/scoreboard"><p class="nav__a__p">Scoreboard</p></a>
                    <a class="nav__a" href="/login"><p class="nav__a__p">Login</p></a>
                </nav>
            )
        } else {
            return (
                <nav class="nav">
                    <a class="nav__a" href="/home"><p class="nav__a__p">Home</p></a>
                    <a class="nav__a" href="#contact"><p class="nav__a__p">Contact</p></a>
                    <a class="nav__a" href="/profiel"><p class="nav__a__p">Profiel</p></a>
                </nav>
            )
        }
    }
}

export default Navbar;