import React from "react";
import axios from "axios";

class Profile extends React.Component{

    state = {
        onLoad: true,
        authName: '',
        authAge: '',
        authScore: '',
    };

    profileSubmit = () => {

        const authData = {
            name: localStorage.getItem('auth_name')
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/profiel`, authData).then(res => {
                if (res.data.status === 200) {
                    this.setState({authName: res.data.name});
                    this.setState({authAge: res.data.age});
                    this.setState({authScore: res.data.score});
                } else {

                }
            });
        });
    }

    render () {
        if (this.state.onLoad === true) {
            this.profileSubmit();
        }
        this.state.onLoad = false;
        return (
            <main>
                <p>Profiel van {this.state.authName}</p>
                <p>{this.state.authName} zijn score: {this.state.authScore}</p>
                <p>{this.state.authName} zijn leeftijd: {this.state.authAge}</p>

                <form onSubmit>
                    <button type="submit">Registreer</button>
                </form>
            </main>
        )
    }
}

export default Profile;