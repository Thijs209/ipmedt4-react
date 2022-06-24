import React from "react";
import axios from "axios";
import "./Exercise.css";

class Exercise extends React.Component{

    state = {
        onLoad: true,
        userInfo: {},
        exerciseData: {},
        loading:true,
    };

    getExercise = () => {
        const authData = {
            name: localStorage.getItem('auth_name')
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/oefening`, authData).then(res => {
                if (res.data.status === 200) {
                    this.setState({userInfo: res.data.userInfo});
                    this.setState({exerciseData: res.data.exercises, loading:false});
                } else {

                }
            });
        });
    }
    
    buttonSubmit = () => {
        this.setState({loading: true})
        const authData = {
            name: localStorage.getItem('auth_name'),
            exerciseCalories: this.state.exerciseData.calories,
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/oefeningAf`, authData).then(res => {
                if (res.data.status === 200) {
                    window.location.replace("/");
                } else {

                }
            });
        });
    }

    render () {
        if (this.state.onLoad === true) {
            this.setState({onLoad: false})
            this.getExercise();
        }

        if (this.state.loading) {
            return(
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            )
        } else {
            return(
                <article className="article">
                    <section className="article__section">
                        <h1 className="article__sectionH1">Er staat een oefening voor je klaar!</h1>
                        <h2 className="article__sectionH2">{this.state.exerciseData.name}</h2>
                        <p className="article__sectionText">
                            {this.state.exerciseData.description}
                        </p>
                        <p className="article__sectionText">
                            Doe deze oefening {this.state.exerciseData.quantity}.
                        </p>
                        <p className="article__sectionText">
                            Je verbrand {this.state.exerciseData.calories} calorieën tijdens deze oefening.
                        </p>
           
                    </section>

                    <figure className="article__figure">
                        <img className="article__figure__img" src={this.state.exerciseData.imagePath}></img>
                    </figure>
                    <button onClick={this.buttonSubmit}>Oefening Gedaan!</button>
                </article> 
            )
        }
    }
}
export default Exercise;