import React from "react";
import "./Footer.css";
import Hogeschool from './assets/Hogeschool.png';
import NBM from './assets/NBM.png';

class Footer extends React.Component{
    
    render(){
        console.log("footer ingeladen");
        return (
            <footer className="footer">
                <img className="img1" src={Hogeschool}></img>
                <img className="img2" src={NBM}></img>
            </footer>
        )
    }
}

export default Footer;