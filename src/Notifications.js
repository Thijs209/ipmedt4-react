import React, { createElement } from "react";
import "./Notifications.css"
import ChooseDays from "./ChooseDays";
import axios from "axios"

class Notifications extends React.Component{
    state = {exercises: 1, everyDay: true, intensity:1, time:{}, submit:false}

    chooseIntensity = (event) =>{
        this.setState({intensity: event.target.value})
    }

    chooseExercise = (event) =>{
        const section = document.getElementById('timeInputSection')
        const inputVeld = document.getElementsByClassName('notificationsForm__timeInput')[0]
        section.innerHTML = ""

        for (let i = 0; i < event.target.value; i++) {
            let newInputField = inputVeld.cloneNode(true)
            newInputField.id = i+1
            section.appendChild(newInputField)
        }
        this.setState({exercises:event.target.value})
    }

    chooseEveryday = (event) =>{
        let clickedButton = event.target
        let otherButton;
        if(clickedButton.id == "yes"){
            otherButton = document.getElementById("no")
            this.setState({everyDay: true})
        } else {
            otherButton = document.getElementById("yes")   
            this.setState({everyDay: false})
        }

        clickedButton.className = "notificationsForm__button fillEveryDay__selectedButton"

        otherButton.className = "notificationsForm__button"
    }

    submit = (event) =>{
        event.preventDefault()
        console.log(event.target);
        let dict = {}
        
        for (let i = 0; i < this.state.exercises; i++) {
            let value = document.getElementById(i+1).value
            let index = i+1
            dict[index] = value
            this.setState({time: dict})
        }
        console.log(this.state)
        this.setState({submit: true})
    }

    render(){
        const username = localStorage.setItem('auth_name')
        if(this.state.submit){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`api/setnofications`, username).then(res => {})})

            // const notificationsData = {
            //     'userID': 
            // }

            // axios.get('/sanctum/csrf-cookie').then(response => {
            //     axios.post(`api/setnotifications`, notificationsData).then(res => {
            //         if (res.data.status === 200) {
            //             localStorage.setItem('auth_token', res.data.token);
            //             localStorage.setItem('auth_name', res.data.username);
            //             window.location.replace("/");
            //         } else if (res.data.status === 401) {
            //             setLoginInvalid(res.data.message);
            //         } else {
            //             setLogin({...loginInput, error_list: res.data.validation_errors});
            //         }
            //     });
            // });
        }
        return(
            <form className="notificationsForm" onSubmit={this.submit}>
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Wil je elke dag meldingen ontvangen of Alleen sommige dagen?</label><br/>
                    <section className="notificationsForm__buttonSection">
                        <input className="notificationsForm__button" id="yes" value="Elke dag" type="button" onClick={this.chooseEveryday}/>
                        <input className="notificationsForm__button" id="no" value="Niet elke dag" type="button" onClick={this.chooseEveryday}/>
                    </section>
                </section>
                <ChooseDays everyDay={this.state.everyDay}/>
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Hoeveel oefeningen per dag Wil je doen?</label><br/>
                    <select onChange={this.chooseExercise} className="notificationsForm__selectInput">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </section>
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Op welke tijden wil je deze oefeningen deon?</label>
                    <section className="notificationsForm__timeInputSection" id="timeInputSection">
                        <input id="1" type="time" className="notificationsForm__timeInput"/>
                    </section>  
                </section>
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Welke intensiteit moeten de oefeningen zijn?</label>
                    <select onChange={this.chooseIntensity} className="notificationsForm__selectInput">
                        <option value='1'>Laag</option>
                        <option value='2'>Medium</option>
                        <option value='3'>Hoog</option>
                    </select>
                </section>
                <section className="notificationsForm__section">
                    <input className="notificationsForm__button notificationsForm__submitButton" type="submit"></input>
                </section>
            </form>
        );
    }
}

export default Notifications