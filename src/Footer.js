import React from "react";
import "./Footer.css";
import Hogeschool from './assets/Hogeschool.png';
import NBM from './assets/NBM.png';

class Footer extends React.Component{
    
    render(){
        console.log("footer ingeladen");
        return (
            <footer className="footer">
                <figure className="footerFigure">
                    <img className="footerFigure__img" src={Hogeschool}></img>
                </figure>
                <figure className="footerFigure">
                    <img className="footerFigure__img" src={NBM}></img>
                </figure>
            </footer>
        )
    }
}

export default Footer;