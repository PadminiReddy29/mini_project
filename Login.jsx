import React, { useState } from 'react';
import { Button, Typography, message} from 'antd';
import TextInput from './components/TextInput';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './services/loginservices';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
  const handleChangeInput = (value, type) => {
    if (type === 'Email') setEmail(value);
    if (type === 'Password') setPassword(value);
    console.log(value);
  };

  const handleLogin= async() =>{
    if(!email || !password){
      message.error("Please fill in all fields");
      return;
    }
    try{
      const data = await loginUser(email,password)
      const msg = data?.message || "Login successful";
      message.success(msg);
      navigate('/home');
     }
     catch (err) {
      message.error(err.error || 'Login failed');
     }
    
  }

    return (
       <>
      <h1>Login</h1>

      <TextInput
        label="Email"
        name="email"
        placeholder="Enter email"
        onChange={(e) => handleChangeInput(e.target.value, 'Email')}
      />

      <TextInput
        label="Password"
        name="password"
        placeholder="Enter password"
        password
        onChange={(e) => handleChangeInput(e.target.value, 'Password')}
        extra={
            <Typography.Link onClick={() => navigate('/forgot-pswd')}>
              Forgot Password?
            </Typography.Link>
          }
      />

      <Button type="primary" onClick={handleLogin} >Login </Button>
    </>
  );
}
export default Login
