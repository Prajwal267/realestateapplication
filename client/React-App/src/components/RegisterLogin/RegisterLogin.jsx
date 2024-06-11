import React, { useState } from 'react'
import './RegisterLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const RegisterLogin = () => {
  const[action, setaction]=useState("Sign up")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
              <input type='text' placeholder='Name'/>  
            </div>}
            
            <div className='input'>
              <input type='email' placeholder='Email'/>  
            </div>
            
            <div className='input'>
              <input type='Password' placeholder='Password'/>  
            </div>
            {action==="Login"?<div></div>:<div className='input'>
              <input type='text' placeholder='Phone'/>  
            </div>}
            
        </div>
        {action==="Sign up"?<div></div>: <div className='forgotpassword'>Forgot Password <a>click here</a></div>}
        <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setaction("Sign up")}>Signup</div>
        <div className={action==="Sign up"?"submit gray":"submit"}onClick={()=>setaction("Login")}>Login</div>
       </div>
       

      
    </div>
  )
}

export default RegisterLogin