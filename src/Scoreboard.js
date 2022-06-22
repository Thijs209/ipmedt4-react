import React from "react";
import axios from "axios";
import "./Scoreboard.css";

class Scoreboard extends React.Component{

    state = {
        onLoad: true,
        scores: [],
    };

    

    loadScores = () => {

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/scoreboard`).then(res => {
                this.setState({scores:res.data});
                var sortedScores = {};
                
                console.log(this.state.scores);
            });
        });
    }

    render () {
        if (this.state.onLoad === true) {
            this.loadScores();
        }
        this.state.onLoad = false;
        return (
            <main>
                <header className="scoreboard__header">
                    <h1 className="scoreboard__heading">Scoreboard</h1>
                </header>

                    {this.state.scores.map(user => {
                        return (
                            <section className="scoreboard__section">
                                <section className="scoreboard__SectionName">
                                    <p className="scoreboard__sectionText">{user.name}</p>
                                </section>
       
                                <section className="scoreboard__SectionScore">
                                    <p className="scoreboard__sectionText">{user.score} punten</p>
                                </section>
                            </section>
                        )
                    })}
       
            </main>
        )
    }
}

export default Scoreboard;