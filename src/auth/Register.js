import React, { useState } from 'react';
import axios from 'axios';

import "./Register.css";

function Register () {

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        age: 0,
        password: '',
        password_confirmation: '',
        error_list: [],
        loading: false,
    });

    const handleInput = (e) => {
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        setRegister({loading: true})

        const registerData = {
            name: registerInput.name, 
            email: registerInput.email,
            age: registerInput.age, 
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        };

        console.log(registerData);

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/register`, registerData).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    window.location.replace("/notificatie");
                } else {
                    setRegister({...registerInput, error_list: res.data.validation_errors, loading:false});
                }
            });
        });
    }

    if (registerInput.loading) {
        return(
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        )  
    } else {
        return (
            <form className="register__form" onSubmit={registerSubmit}>
                <section className="register__section register__titel">
                    <h1>Maak een account!</h1>
                    <p>Zo kan je je scores goed bijhouden en later terug bekijken via het scoreboard.</p>
                </section>

                <section className="register__section register__naam">
                    <label for="name">Naam</label>
                    <input type="text" name="name" id="name" onChange={handleInput} />
                    <span>{registerInput.error_list.name}</span>
                </section>

                <section className="register__section register__email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleInput} />
                    <span>{registerInput.error_list.email}</span>
                </section>

                <section className="register__section register__leeftijd">
                    <label for="age">Leeftijd</label>
                    <input type="number" min="12" max="120" name="age" id="age" onChange={handleInput} />
                    <span>{registerInput.error_list.age}</span>
                </section>
            
                <section className="register__section register__wachtwoord">
                    <label for="password">Wachtwoord</label>
                    <input type="password" name="password" id="password" onChange={handleInput} />
                    <span>{registerInput.error_list.password}</span>
                </section>

                <section className="register__section register__confirm">
                    <label for="password_confirm">Herhaal je wachtwoord</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" onChange={handleInput} />
                    <span>{registerInput.error_list.password_confirmation}</span>
                </section>

                <button className="register__button" type="submit">Registreer</button>
            </form>
        );
    }
}

export default Register;