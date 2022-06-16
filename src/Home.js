import React from "react";
import "./Home.css";

class Home extends React.Component{
    
    render(){
        /* If ingelogd, dan eerste return, anders tweede*/
        console.log("home ingeladen");
        if(true){
            return (
                <main>
                    <section class="home__section">
                        <button onClick={this.buttonPress} class="home__section__button">
                            <a class="home__button__a" href="/api/exercise/">Begin<br/>oefening!</a>
                        </button>
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