import React from "react";

class ChooseDays extends React.Component {
    state = { days: {} } 
    chooseDay = (event) =>{
        let button = event.target
        if(this.state.days[button.id] == true){
            button.className = "notificationsForm__dayButton"
            this.state.days[button.id] = false
        } else{
            button.className = "notificationsForm__dayButton notificationsForm__dayButtonSelected"
            this.state.days[button.id] = true
        }
    }

    render() { 
        if(this.props.everyDay == false){
            return (
                <section className="notificationsForm__section">
                    <label className="notificationsForm__label">Op welke dagen wil je dan meldingen ontvangen?</label>
                    <section className="notificationsForm__dayButtonSection">
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="monday" value="Maandag" />
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="tuesday" value="Dinsdag" />
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="wednesday" value="Woensdag" />
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="thursday" value="Donderdag" />
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="friday" value="Vrijdag" />
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="saturday"  value="Zaterdag" />
                        <input onClick={this.chooseDay} className="notificationsForm__dayButton" type="button" id="sunday" value="Zondag" />
                    </section>
                </section>
            );
        }
    }
}
 
export default ChooseDays;