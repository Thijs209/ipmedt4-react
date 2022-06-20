import React from "react";
import "./Home.css";
import sporters from './assets/5sporters.jpg';

class Home extends React.Component{
    
    render(){
        /* If ingelogd, dan eerste return, anders tweede*/
        console.log("home ingeladen");
        if(true){
            return (
                <main class="main">
                    <section class="section">
                        <button onClick={this.buttonPress} class="section__button">
                            <a class="section__button__a" href="/api/exercise/">Begin<br/>oefening!</a>
                        </button>
                    </section>
                    <section class="section__info">
                        <h1 class="section__info__h1">Nationale beweegminuut</h1>
                        <h1 class="section__info__h1">Wat is het?</h1>
                        <figure class="section__info__figure">
                            <img class="section__info__img" src={sporters} alt="Foto van vogel"></img>
                        </figure>
                        <section class="section__info__text">
                            <p></p>
                        </section>
                    </section>
                </main>
            )
        } else {
            return (
                <main>
                    <h1>Test test</h1>
                </main>
            )
        }
    }
}

export default Home;