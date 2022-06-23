import React from "react";
import "./Home.css";
import sporter from './assets/sporter.jpg';
import kantoor from './assets/kantoormensen.jpg';

class Home extends React.Component{
    
    buttonPress = () =>{
        window.location.replace("/oefening")
    }

    render(){
        console.log("home ingeladen");
        return (
            <main className="main">
                <section className="section">
                    <button onClick={this.buttonPress} className="section__button">
                        <a className="section__button__a">Begin<br/>oefening!</a>
                    </button>
                </section>
                <section className="section__info section__grid">
                    <h1 className="section__info__h1 h1_grid1">Nationale beweegminuutje</h1>
                    <h1 className="section__info__h1 h1_grid2">Wat is het?</h1>
                    <figure className="section__info__figure figure1">
                        <img className="section__info__img" src={sporter} alt="Foto van hardlopers." />
                    </figure>
                    <section className="section__info__text text1">
                        <p>Je kent het wel. Je komt aan op je werk en je stapt richting het trappenhuis, maar in je ooghoek merk je op dat de lift toevallig net beneden aankomt. Ach, hij staat er nou toch al! Eenmaal op de 3e verdieping ga je zitten aan je bureau, nadat je net nog een koffie even hebt gepakt. Dat is het dan. Dat was je beweging voor de ochtend. De aankomende 8 uur zit je op je reet en zet je je lichaam in een 90 graden hoek op een stoel met wieltjes.</p>
                    </section>
                    <section className="section__info__text text2">
                        <p>Dit kan natuurlijk niet langer! Steeds meer mensen werken op kantoor en bewegen daardoor te weinig. Daarom is er nu het nationale beweegminuutje! Iedereen kan zich aanmelden en meedoen aan gezonder Nederland! Het werkt heel simpel: Je meldt je aan via deze website en daarna krijg je elke werkdag 1x een melding wanneer je moet sporten. Doe snel mee!</p>
                    </section>
                    <figure className="section__info__figure figure2">
                        <img className="section__info__img" src={kantoor} alt="Plaatje" />
                    </figure>
                </section>
                {!localStorage.getItem('auth_token') ?
                    <section className="section__aanmeld">
                        <a className="aanmeld__a" href="/register"><p className="aanmeld__a__p">Meld je meteen aan!</p></a>
                    </section>:<section></section>
                }
            </main>
        )
        
    }
}

export default Home;