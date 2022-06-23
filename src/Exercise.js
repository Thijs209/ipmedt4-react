import React from "react";
import axios from "axios";
import "./Exercise.css";

class Exercise extends React.Component{

    state = {
        onLoad: true,
        userInfo: {},
        exerciseData: {},
    };

    getExercise = () => {
        const authData = {
            name: localStorage.getItem('auth_name')
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/oefening`, authData).then(res => {
                if (res.data.status === 200) {
                    this.setState({userInfo: res.data.userInfo});
                    this.setState({exerciseData: res.data.exercises});
                } else {

                }
            });
        });
    }
    
    buttonSubmit = () => {
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
            this.getExercise();
        }
        this.state.onLoad = false;
        
        return(
            <article className="article">
                <section>
                    <h1>Er staat een oefening voor je klaar!</h1>
                    <h2>{this.state.exerciseData.name}</h2>
                    <p>
                        {this.state.exerciseData.description}
                    </p>
                </section>

                <figure>
                    <img className="article__figure__img" src="../Assets/exercise_jumpingjack.jpg"></img>
                </figure>
                <button onClick={this.buttonSubmit}>Oefening Gedaan!</button>
            </article> 
        )
    }
}
export default Exercise;