import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { loginAction } from '../../../../actions/loginActions';
import { store } from '../../../../reducers/allReducers'

function Header(props) {

    const [displayEmailOrPasswordIncorrect, setDisplayEmailOrPasswordIncorrect] = useState('visually-hidden');
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const dispatch = useDispatch();

    const login = useSelector(state => state.loginLogout);

    function onChangeEmailLogin(event) {
        let email = event.target.value;
        setEmailLogin(email);
    }

    function onChangePasswordLogin(event) {
        let password = event.target.value;
        setPasswordLogin(password);
    }

    function loginUser(event) {
        event.preventDefault();

        const post = {
            email: emailLogin,
            password: passwordLogin
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        

        const loadItemAnAdd = () => {

            return () => {
                fetch('/user/login', options).then(res => {
                    if (res.status === 400) {
                        setDisplayEmailOrPasswordIncorrect('')
                    } else if (res.status === 200) {
                        setDisplayEmailOrPasswordIncorrect('visually-hidden')
                    }
                    return res.json()
                }).then(token => {
                    console.log(token)
                    if (token) {
                        localStorage.setItem('soe-token', token[0]);
                        dispatch(loginAction());
                    }
                })
            }
        }

        store.dispatch(loadItemAnAdd())
    }

    return (
        <div>
            <div className='bg-secondary p-1'>
                <header className='container text-light d-flex justify-content-between align-items-center flex-column p-2
                flex-sm-row'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='display-5 text-light'>SOEBr</h1>
                        <h2 className='display-7 text-light text-center'>SISTEMA OPERACIONAL ESCOLAR DO BRASIL</h2>

                    </div>
                    <div>
                        <form className='d-flex flex-column justify-content-center'>
                            <div className='d-flex flex-column
                            flex-sm-row'>
                                {/* login */}
                                <input onChange={onChangeEmailLogin} id='email-login' className='form-control form-control-sm me-1 mb-1' type="email" placeholder="Email"></input>
                                <input onChange={onChangePasswordLogin} id='password-login' className='form-control form-control-sm mb-1' type='password' placeholder="Senha"></input>
                            </div>
                            <button onClick={loginUser} className='btn btn-primary'>Login</button>
                            <div className={`${displayEmailOrPasswordIncorrect} card border-danger`}><p className='text-danger align-self-center my-1'>Email ou senha incorreto</p></div>
                        </form>
                    </div>
                </header>
            </div>
            <div className='bg-dark mt-1 d-hidden'>
                <div className='container text-light d-flex flex-row justify-content-end align-items-center'>
                    <a href='*' className='text-light display-8 btn btn-sm mx-1'>COMO UTILIZAR A PLATAFORMA</a>
                    <a href='*' className='text-light display-8 btn btn-sm mx-1'>CONTATO</a>
                    <a href='*' className='text-light display-8 btn btn-sm mx-1'>DOWNLOAD</a>
                </div>
            </div>

            {login ? <Redirect to='/set'/> : console.log('ainda não')}
        </div>

        
    )
}

export default Header;