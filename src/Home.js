import React from "react";
import "./Home.css";
import sporter from './assets/sporter.jpg';
import kantoor from './assets/kantoormensen.jpg';

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
                    <section class="section__info section__grid">
                        <h1 class="section__info__h1 h1_grid1">Nationale beweegminuutje</h1>
                        <h1 class="section__info__h1 h1_grid2">Wat is het?</h1>
                        <figure class="section__info__figure figure1">
                            <img class="section__info__img" src={sporter} alt="Foto van hardlopers." />
                        </figure>
                        <section class="section__info__text text1">
                            <p>Je kent het wel. Je komt aan op je werk en je stapt richting het trappenhuis, maar in je ooghoek merk je op dat de lift toevallig net beneden aankomt. Ach, hij staat er nou toch al! Eenmaal op de 3e verdieping ga je zitten aan je bureau, nadat je net nog een koffie even hebt gepakt. Dat is het dan. Dat was je beweging voor de ochtend. De aankomende 8 uur zit je op je reet en zet je je lichaam in een 90 graden hoek op een stoel met wieltjes.</p>
                        </section>
                        <section class="section__info__text text2">
                            <p>Dit kan natuurlijk niet langer! Steeds meer mensen werken op kantoor en bewegen daardoor te weinig. Daarom is er nu het nationale beweegminuutje! Iedereen kan zich aanmelden en meedoen aan gezonder Nederland! Het werkt heel simpel: Je meldt je aan via deze website en daarna krijg je elke werkdag 1x een melding wanneer je moet sporten. Doe snel mee!</p>
                        </section>
                        <figure class="section__info__figure figure2">
                            <img class="section__info__img" src={kantoor} alt="Plaatje" />
                        </figure>
                    </section>
                    <section class="section__aanmeld">
                        <a class="aanmeld__a"><p class="aanmeld__a__p">Meld je meteen aan!</p></a>
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