import React from "react";
import axios from "axios";
import "./Exercise.css";

class Exercise extends React.Component{

    state = {
        onLoad: true,
        exerciseData: {},
    };

    loadExercise = () => {
        const authData = {
            name: localStorage.getItem('auth_name')
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/oefening`, authData).then(res => {
                if (res.data.status === 200) {
                    console.log(res.data.userInfo);
                    console.log(res.data.exercises);
                } else {

                }
            });
        });
    }
    
    buttonLink = () => {
        window.location.replace("/");
    }

    render () {
        if (this.state.onLoad === true) {
            this.loadExercise();
        }
        this.state.onLoad = false;
        
        return(
            <article className="article">
                <section>
                    <h1>Er staat een oefening voor je klaar!</h1>
                    <h2>Jumping Jacks!</h2>
                    <ol>
                        <li>Ga in de beginnende positie klaarstaan door recht op te staan met je benen naast elkaar en je armen langs je lichaam</li>
                        <li>Buig lichtjes je knieën en spring in de lucht</li>
                        <li>Beweeg je benen naar schouderbreedte terwijl je in de lucht springt. Ondertussen strek je ook je armen boven je hoofd uit</li>
                        <li>Spring nu weer terug in de start positie</li>
                    </ol>
                </section>

                <figure>
                    <img className="article__figure__img" src="../Assets/exercise_jumpingjack.jpg"></img>
                </figure>
                <button onClick={this.buttonLink}>Oefening Gedaan!</button>
            </article> 
        )
    }
}
export default Exercise;