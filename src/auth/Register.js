import React, { useState } from 'react';
import axios from 'axios';

function Register () {

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        error_list: [],
    });

    const handleInput = (e) => {
        setRegister({...registerInput, [e.target.name]: e.target.value});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const registerData = {
            name: registerInput.name, 
            email: registerInput.email, 
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        };

        axios.get('sanctum/csrf-cookie').then(response => {
            axios.post(`api/register`, registerData).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    window.location.replace("/");
                } else {
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
        <form onSubmit={registerSubmit}>
            <h1>Register Page</h1>

            <section>
                <label for="name">Naam</label>
                <input type="text" name="name" id="name" onChange={handleInput} />
                <span>{registerInput.error_list.name}</span>
            </section>

            <section>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput} />
                <span>{registerInput.error_list.email}</span>
            </section>
           
            <section>
                <label for="password">Wachtwoord</label>
                <input type="password" name="password" id="password" onChange={handleInput} />
                <span>{registerInput.error_list.password}</span>
            </section>

            <section>
                <label for="password_confirm">Herhaal je wachtwoord</label>
                <input type="password" name="password_confirmation" id="password_confirmation" onChange={handleInput} />
                <span>{registerInput.error_list.password_confirmation}</span>
            </section>

            <button type="submit">Registreer</button>
        </form>
    );
}

export default Register;