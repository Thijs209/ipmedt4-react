import React, { useState } from 'react';
import axios from 'axios';

function Register () {

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const [loginInvalid, setLoginInvalid] = useState('');

    const handleInput = (e) => {
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, loginData).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    window.location.replace("/");
                } else if (res.data.status === 401) {
                    setLoginInvalid(res.data.message);
                } else {
                    setLogin({...loginInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
        <form  class="register__form__login" onSubmit={loginSubmit}>
            <h1>Login Page</h1>

            <section class="register__section__login">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleInput} />
                <span>{loginInput.error_list.email}</span>
            </section>

            <section class="register__section__login">
                <label for="password">Wachtwoord</label>
                <input type="password" name="password" id="password" onChange={handleInput} />
                <span>{loginInput.error_list.password}</span>
            </section>

            <span>{loginInvalid}</span>

            <button  class="register__button__login" type="submit">Log in</button>
        </form>
    );
}

export default Register;