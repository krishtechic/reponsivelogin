import React, { useState } from 'react'
import './Form.css'

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Email: ", email);
      console.log("Password: ", password);
    };
  return (
    <div className='login-box'>
    <p>Login</p>

    <form onSubmit={handleSubmit}>
    <div className='user-box'>
    <input type="email" name="email" value={email} onChange={handleEmailChange} required/>
    <label>Email</label>
    </div>
    <div className='user-box'>
    <input type="password" name="email" value={password} onChange={handlePasswordChange} required/>
    <label>Password</label>
    </div>
    <a href='#' onClick={handleSubmit}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Submit
    </a>
    
    <p>Don't have an account? <sub> <a href='' className="a2">Sign up!</a></sub></p>
    </form>
    </div>
  )
}

export default Form