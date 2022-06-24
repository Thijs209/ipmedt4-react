import React, { useState } from 'react';
import axios from 'axios';

 
function Register () {

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
        loading: false,
    });

    const [loginInvalid, setLoginInvalid] = useState('');

    const handleInput = (e) => {
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        setLogin({loading:true})

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
                    setLogin({loading:false})
                } else {
                    setLogin({...loginInput, error_list: res.data.validation_errors, loading:false});
                }
            });
        });
    }

    if (loginInput.loading) {
        return(
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        )  
    } else {
        return (
            <form  className="register__form__login" onSubmit={loginSubmit}>
                <h1>Login Page</h1>

                <section className="register__section__login">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleInput} />
                    <span className="register__sectionSpan">{loginInput.error_list}</span>
                </section>

                <section className="register__section__login">
                    <label for="password">Wachtwoord</label>
                    <input type="password" name="password" id="password" onChange={handleInput} />
                    <span className="register__sectionSpan">{loginInput.error_list}</span>
                </section>

                <span className="register__sectionSpan">{loginInvalid}</span>

                <button  className="register__button__login" type="submit">Log in</button>

                <section className="register__section__change">
                    <a className="register__section__changeText" href="/register">Heb je nog geen account? Meld je hier aan</a>
                </section>
            </form>
        );
    }
}

export default Register;