import React from "react";
import "./Footer.css";
import Hogeschool from './assets/hogeschool-leiden.webp';
import instagram from './assets/instagram.webp'
import facebook from './assets/facebook.png'
import NBM from './assets/NBM.png';
import twitter from './assets/twitter.png'

class Footer extends React.Component{
    
    render(){
        console.log("footer ingeladen");
        return (
            <footer className="footer">
                <section className="footer__socialMedia">
                    <figure className="footerFigure">
                        <img className="footerFigure__img" src={instagram}></img>
                    </figure>
                    <figure className="footerFigure facebook">
                        <img className="footerFigure__img " src={facebook}></img>
                    </figure>
                    <figure className="footerFigure">
                        <img className="footerFigure__img " src={twitter}></img>
                    </figure>
                </section>
                <section className="footer__logos">
                    <figure className="footerFigure">
                        <img className="footerFigure__img" src={Hogeschool}></img>
                    </figure>
                    <figure className="footerFigure">
                        <img className="footerFigure__img" src={NBM}></img>
                    </figure>
                </section>
            </footer>
        )
    }
}

export default Footer;