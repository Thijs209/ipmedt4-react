import React from "react";

class ChooseDays extends React.Component {
    chooseDay = (event) =>{
        this.props.chooseDay(event)
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