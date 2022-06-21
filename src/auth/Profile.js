import React from "react";
import axios from "axios";

class Profile extends React.Component{

    state = {
        onLoad: true,
        authName: '',
    };

    profileSubmit = () => {

        const authData = {
            name: localStorage.getItem('auth_name')
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/profiel`, authData).then(res => {
                if (res.data.status === 200) {
                    this.setState({authName: res.data.name});
                } else {

                }
                console.log(this.state.authName);
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
            </main>
        )
    }
}

export default Profile;