import React from "react";
import "./Footer.css";
import Hogeschool from './assets/Hogeschool.png';
import NBM from './assets/NBM.png';

class Footer extends React.Component{
    
    render(){
        console.log("footer ingeladen");
        return (
            <footer class="footer">
                <img class="img1" src={Hogeschool}></img>
                <img class="img2" src={NBM}></img>
            </footer>
        )
    }
}

export default Footer;