import { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      name,
      email,
      password,
      loggedIn: true,

    }));
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button type="submit" className="submit__btn">Submit</button>
      </form>

    </div>
  );
};

export default Login;
