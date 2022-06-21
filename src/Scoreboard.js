import React from "react";
import axios from "axios";

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
                <section>
                    {this.state.scores.map(user => {
                        return (
                            <div>{user.name} heeft {user.score} puntjes.</div>
                        )
                    })}
                </section> 
            </main>
        )
    }
}

export default Scoreboard;