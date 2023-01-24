import { useState } from 'react'
import { useDispatch } from 'react-redux';
import authSlice from 'redux/auth/auth.slice';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            password
    }

    console.log(formData);

    dispatch(register(authSlice));

    setName('');
    setEmail('');
    setPassword('');
    }





  return (
    <div>
        <h1>Register Page</h1>
        <form>
            <label>Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>E-mail:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type='submit'>SignUp</button>
        </form>
    </div>
  )
}

export default RegisterPage