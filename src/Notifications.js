import React from "react";
import "./Notifications.css"

class Notifications extends React.Component{
    state = {exercises: 5}
    // chooseDays = (choice) =>{
    //     console.log("test")
    //     const yesButton = document.getElementById('yes');
    //     const noButton = document.getElementById('no');



    //     // yesButton.style.backgroundColor = "#fbd83a"
    //     // yesButton.style.boxShadow = "-0.5rem 0.5rem 0 #fbd83a";
    // }

    chooseExercise = (event) =>{
        this.setState({exercises:event.target.value})
    }

    render(){
        return(
            <form className="notificationsForm">
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Wil je elke dag meldingen ontvangen of Alleen sommige dagen?</label><br/>
                    <section className="fillEveryDay__buttonSection">
                        <button className="fillEveryDay__button" id="yes" type="button">Ja</button>
                        <input className="fillEveryDay__button" id="no" value="Nee" type="button"/>
                    </section>
                </section>
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Hoeveel oefeningen per dag Wil je doen?</label><br/>
                    <select onChange={this.chooseExercise} className="notificationsForm__selectExercises">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </section>
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Op welke tijden wil je deze oefeningen deon?</label>
                </section>
            </form>
        );
    }
}

export default Notifications