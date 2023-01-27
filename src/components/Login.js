import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login">

      <form className="login__form">

        <h1>Login Here</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

      </form>

    </div>
  );
};

export default Login;
