import React, { createElement } from "react";
import "./Notifications.css"
import ChooseDays from "./ChooseDays";
import axios from "axios"

class Notifications extends React.Component{
    state = {loading:false, exercises: 1, everyDay: true, intensity:1, time:"", days:{'monday': true, 'tuesday':true, 'wednesday':true, 'thursday':true, 'friday':true, 'saturday':true, 'sunday':true}}

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
            this.setState({everyDay: true, days:{'monday': true, 'tuesday':true, 'wednesday':true, 'thursday':true, 'friday':true, 'saturday':true, 'sunday':true}})
        } else {
            otherButton = document.getElementById("yes")   
            this.setState({everyDay: false, days:{'monday': false, 'tuesday':false, 'wednesday':false, 'thursday':false, 'friday':false, 'saturday':false, 'sunday':false}})
        }

        clickedButton.className = "notificationsForm__button fillEveryDay__selectedButton"

        otherButton.className = "notificationsForm__button"
    }

    
    chooseDay = (event) =>{
        let button = event.target
        if(this.state.days[button.id] == true){
            button.className = "notificationsForm__dayButton"
            this.state.days[button.id] = false
        } else{
            button.className = "notificationsForm__dayButton notificationsForm__dayButtonSelected"
            this.state.days[button.id] = true
        }
        
        console.log(this.state.days);
    }

    submit = (event) =>{
        event.preventDefault()
        let string = "";
        
        for (let i = 0; i < this.state.exercises; i++) {
            let value = document.getElementById(i+1).value
            string = string + "/" + value;
            this.setState({time: string})
            console.log(this.state.time)
        }
        this.setState({loading: true})
        this.makeApiCall();
    }

    makeApiCall = () => {
        const username = {name: localStorage.getItem('auth_name')}
        let notificationsData = {}

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/getId`, username).then(res => {
                if (res.data.status === 200) {
                    notificationsData = {
                        'userId': res.data.id,
                        'exercise_amount': this.state.exercises,
                        'intensity': this.state.intensity,
                        'time' : this.state.time,
                        'monday' : this.state.days['monday'],
                        'tuesday' : this.state.days['tuesday'],
                        'wednesday' : this.state.days['wednesday'],
                        'thursday' : this.state.days['thursday'],
                        'friday' : this.state.days['friday'],
                        'saturday' : this.state.days['saturday'],
                        'sunday' : this.state.days['sunday'],
                    }
                    axios.get('/sanctum/csrf-cookie').then(response => {
                        console.log(notificationsData);
                            axios.post(`api/setnotifications`, notificationsData).then(res => {
                            if (res.data.status === 200) {
                                console.log('xd');
                                window.location.replace("/profiel");
                            } else {
                                console.log("oeps");
                                console.log(res.data);
                            }
                        });
                    })
                    console.log(notificationsData);
            
                    
                } else {
                    console.log("oeps");
                }
                
            })
        })
    }

    closeButton = (event) =>{
        event.preventDefault()
        window.location.replace('/profiel')
    }

    render(){
        if (this.state.loading) {
            return(
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            )  
        } else {
            return(
                
                <form className="notificationsForm" onSubmit={this.submit}>
                <button onClick={this.closeButton} className="notificationsForm__closeButton"><svg className="cross" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg></button>
                <h1 className="notificationsForm__h1">Stel je tijden in</h1>
                    <section className="notificationsForm__section">
                        <label className="notificationsForm__label">Wil je elke dag meldingen ontvangen of Alleen sommige dagen?</label><br/>
                        <section className="notificationsForm__buttonSection">
                            <input className="notificationsForm__button fillEveryDay__selectedButton" id="yes" value="Elke dag" type="button" onClick={this.chooseEveryday}/>
                            <input className="notificationsForm__button" id="no" value="Niet elke dag" type="button" onClick={this.chooseEveryday}/>
                        </section>
                    </section>
                    <ChooseDays chooseDay={this.chooseDay} everyDay={this.state.everyDay}/>
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
                        <label className="notificationsForm__label">Op welke tijden wil je deze oefeningen doen?</label>
                        <section className="notificationsForm__timeInputSection" id="timeInputSection">
                            <input required id="1" type="time" className="notificationsForm__timeInput"/>
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
}

export default Notifications