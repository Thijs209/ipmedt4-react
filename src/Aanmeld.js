import React from "react";

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
            <section>
                <form onSubmit={this.onSubmit}>
                    <input
                    className="Aanmeld__voornaam"
                    type="text"
                    placeholder="Vul hier je voornaam in..."
                    onChange={this.onSearch}
                    />
                    <input
                    className="Aanmeld__achternaam"
                    type="text"
                    placeholder="Vul hier je achternaam in..."
                    />
                    <input
                    className="Aanmeld__email"
                    type="text"
                    placeholder="Vul hier je email adres in..."
                    />
                    <input
                    className="Aanmeld__wachtwoord"
                    type="password"
                    placeholder="Vul hier je wachtwoord in..."
                    />

                    <input
                    className="Aanmeld__leeftijd"
                    type="date"
                    />

                    <input
                    className="Aanmeld__geslacht"
                    type="radio"
                    value="Man"
                    name="geslacht" />
                    <input
                    className="Aanmeld__geslacht"
                    type="radio"
                    value="Vrouw"
                    name="geslacht" />
                    <input
                    className="Aanmeld__geslacht"
                    type="radio"
                    value="Overig"
                    name="geslacht" />

                    <input type="submit" value="Registreer"/>

                </form>
            </section>
        )
    }
}

export default Aanmeld;