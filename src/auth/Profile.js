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
        dagen: [],
        loading: true,
        tijden: '',
        checkDays: '',
        checkTimes: '',
        deviceKey: '',
        notificationClass: 'articleSectionNotifications_off',
    };
    
    profileSubmit = () => {

        const authData = {
            name: localStorage.getItem('auth_name')
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/profiel`, authData).then(res => {
                if (res.data.status === 200) {
                    this.setState({authName: res.data.name, authAge: res.data.age, authScore: res.data.score, notificationInfo: res.data.notifications, loading:false});
                    this.setState({deviceKey: res.data.deviceKey});
                    this.checkTimes();
                    this.checkDeviceKey();
                } else {

                }
            });
        });
    }

    redirectNotifications = (e) => {
        e.preventDefault();
        window.location.replace("/notificatie");
    }

    checkDeviceKey = () => {
        if (this.state.deviceKey === 200) {
            this.setState({notificationClass: 'articleSectionNotifications_off'});
        } else {
            this.setState({notificationClass: 'articleSectionNotifications_on'});
        }
    }

    checkTimes = () => {
        if (this.state.notificationInfo !== null) {
            const timeArray = this.state.notificationInfo.time.split('/');
            if (this.state.notificationInfo.monday === 1 && 
                this.state.notificationInfo.tuesday === 1 &&
                this.state.notificationInfo.wednesday === 1 &&
                this.state.notificationInfo.thursday === 1 &&
                this.state.notificationInfo.friday === 1 &&
                this.state.notificationInfo.saturday === 1 &&
                this.state.notificationInfo.sunday === 1
                ) {
                    this.setState({dagen: [...this.state.dagen, "Elke dag"]});
                    for (var i = 0; i < timeArray.length; i++) {
                        this.setState({tijden: this.state.tijden + " " + timeArray[i]});
                    }
            } else {
                if (this.state.notificationInfo.monday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Maandag"]});
                }
                if (this.state.notificationInfo.tuesday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Dinsdag"]});
                }
                if (this.state.notificationInfo.wednesday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Woensdag"]});
                }
                if (this.state.notificationInfo.thursday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Donderdag"]});
                }
                if (this.state.notificationInfo.friday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Vrijdag"]});
                }
                if (this.state.notificationInfo.saturday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Zaterdag"]});
                }
                if (this.state.notificationInfo.sunday === 1) {
                    this.setState({dagen: [...this.state.dagen, "Zondag"]});
                }
                for (var i = 0; i < timeArray.length; i++) {
                    this.setState({tijden: this.state.tijden + " " + timeArray[i]});
                }
            }
            this.setState({checkDays: "Je ingestelde dagen"});
            this.setState({checkTimes: "Je ingestelde tijden"});
        } else {
            this.setState({checkDays: "Je hebt nog geen notificaties ingesteld"});
        }
    }

    render () {
        if (this.state.onLoad === true) {
            this.profileSubmit();
            this.setState({onLoad:false})
        }

        if (this.state.loading) {
            return(
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            )            
        } else {
            return (
                <article className="profile__article">

                    <section className={this.state.notificationClass}>
                        <h2 className="articleSection__h2">Je hebt nog geen notificaties ingesteld</h2>
                        <p className="profile__articleSection-text">Klik op de onderstaande knop en log in met je gegevens.</p>
                        <p className="profile__articleSection-text">Klik vervolgens op de "Allow notifications" knop.</p>
                        <form action="http://127.0.0.1:8000/login" target="_blank" className="profileButtonSection-push">
                            <button className="profileButtonSection__btn-push" type="submit">Zet push notifications aan</button>
                        </form>
                    </section>

                    <section className="articleSection">
                        <h2 className="articleSection__h2">{this.state.authName}</h2>
                        <p>{this.state.authName} zijn score: {this.state.authScore}</p>
                        <p>{this.state.authName} zijn leeftijd: {this.state.authAge}</p>
                    </section>

                    <section className="articleSection">
                        <h2 className="articleSection__h2">{this.state.checkDays}</h2>
                        <p>{this.state.dagen[0]}</p>
                        <p>{this.state.dagen[1]}</p>
                        <p>{this.state.dagen[2]}</p>
                        <p>{this.state.dagen[3]}</p>
                        <p>{this.state.dagen[4]}</p>
                        <p>{this.state.dagen[5]}</p>
                        <p>{this.state.dagen[6]}</p>

                        <h2 className="articleSection__h2 articleSection-padding">{this.state.checkTimes}</h2>
                        <p>{this.state.tijden}</p>
                    </section>

                    <section className="profileButtonSection">
                        <button className="profileButtonSection__btn" onClick={this.redirectNotifications}>Stel je notificaties in</button>
                    </section>

                </article>
            )
        }
    }
}

export default Profile;