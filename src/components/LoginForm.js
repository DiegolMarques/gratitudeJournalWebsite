import React from 'react'
import {useNavigate} from 'react-router-dom'
import authStore from '../stores/authStore';

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await store.login();

        // Navigate
        navigate("/")
    }

    return (
        <form onSubmit={handleLogin}>
            <input 
            class = 'email1'
            onChange={store.updateLoginForm} 
            value={store.loginForm.email} 
            placeholder="Email"
            type="email" 
            name="email" 
            />
            <input 
            class = 'pass1'
            onChange={store.updateLoginForm} 
            value={store.loginForm.password} 
            placeholder="Password"
            type="password" 
            name="password" 
            />
            <button class = 'loginbut1' type = "submit">Login</button>
        </form>
    );
}