import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

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

    dispatch(registerThunk(formData));

    setName('');
    setEmail('');
    setPassword('');
    }


  return (
    <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}> 
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

export default RegisterPage;