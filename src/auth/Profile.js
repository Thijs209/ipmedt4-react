import React from "react";
import axios from "axios";
import "./Profile.css";

class Profile extends React.Component{

    state = {
        onLoad: true,
        authName: '',
        authAge: '',
        authScore: '',
        splitTimes: '',
        notificationInfo: {},
        dagen: '',
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
                    this.setState({notificationInfo: res.data.notifications});
                    console.log(this.state.notificationInfo);
                    this.checkTimes();
                } else {

                }
            });
        });
    }

    redirectNotifications = (e) => {
        e.preventDefault();
        window.location.replace("/notificatie");
    }

    checkTimes = () => {
        const timeArray = this.state.notificationInfo.time.split('/');
        if (this.state.notificationInfo.monday === 1 && 
            this.state.notificationInfo.tuesday === 1 &&
            this.state.notificationInfo.wednesday === 1 &&
            this.state.notificationInfo.thursday === 1 &&
            this.state.notificationInfo.friday === 1 &&
            this.state.notificationInfo.saturday === 1 &&
            this.state.notificationInfo.sunday === 1
            ) {
                for (var i = 0; i < timeArray.length; i++) {
                    this.setState({dagen: this.state.dagen + " " + timeArray[i]});
                }
                this.setState({dagen: "Elke dag om: " + this.state.dagen});
        } else {
            
        }
    }

    render () {
        if (this.state.onLoad === true) {
            this.profileSubmit();
        }
        this.state.onLoad = false;
        return (
            <article>
                <section className="articleSection">
                <p>Profiel van {this.state.authName}</p>
                <p>{this.state.authName} zijn score: {this.state.authScore}</p>
                <p>{this.state.authName} zijn leeftijd: {this.state.authAge}</p>
                </section>

                <section className="profileButtonSection">
                    <button className="profileButtonSection__btn" onClick={this.redirectNotifications}>Stel je notificaties in</button>
                </section>

                <section className="articleSection">
                <h2>Je ingestelde tijden</h2>
                <p>{this.state.dagen}</p>

                </section>
            </article>
        )
    }
}

export default Profile;