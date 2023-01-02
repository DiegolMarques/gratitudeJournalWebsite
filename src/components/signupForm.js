import authStore from "../stores/authStore";
import {useNavigate} from 'react-router-dom';

export default function SignupForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate('/login');
    };

    return (
    <form onSubmit={handleSignup}>
    <input 
    class = "email2"
    onChange={store.updateSignupForm} 
    value={store.signupForm.email} 
    placeholder = "Email"
    type="email" 
    name="email" 
    />
    <input 
    class = "pass2"
    onChange={store.updateSignupForm} 
    value={store.signupForm.password} 
    placeholder = "Password"
    type="password" 
    name="password" 
    />
    <button class = 'signup1' type = "submit">Signup</button>
</form>
    );
}