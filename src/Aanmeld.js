import React from "react";
import "./Aanmeld.css";

class Aanmeld extends React.Component{
    state = {aanmeldForm: ""};

    onSearch = event => {
        this.setState({aanmeldForm: event.target.value });
    }
    
    onSubmit = event => {
        event.preventDefault();
        console.log("onSubmit checking");
        this.props.onSubmit(this.state.aanmeldForm);
    };
    
    render(){
        console.log(this.state.aanmeldForm);
        return (
            <section class="section__form">
                <form class="form" onSubmit={this.onSubmit}>
                    <input
                    class="Aanmeld__voornaam"
                    type="text"
                    placeholder="Vul hier je voornaam in..."
                    onChange={this.onSearch}
                    />
                    <input
                    class="Aanmeld__achternaam"
                    type="text"
                    placeholder="Vul hier je achternaam in..."
                    />
                    <input
                    class="Aanmeld__email"
                    type="text"
                    placeholder="Vul hier je email adres in..."
                    />
                    <input
                    class="Aanmeld__wachtwoord"
                    type="password"
                    placeholder="Vul hier je wachtwoord in..."
                    />

                    <input
                    class="Aanmeld__leeftijd"
                    type="date"
                    />

                    <select class="Aanmeld__geslacht" name="geslacht" placeholder="Selecteer je geslacht...">
                        <option value="man">Man</option>
                        <option value="vrouw">Vrouw</option>
                        <option value="anders">Anders</option>
                    </select>

                    <input class="Aanmeld__submit" type="submit" value="Registreer"/>

                </form>
            </section>
        )
    }
}

export default Aanmeld;