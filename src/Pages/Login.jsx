import React, { useState } from "react";
import { useNavigate, Link, Await } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../style.scss"

const Login = () => {



    const [err , setErr ] = useState(false);
    const navigate = useNavigate()
      const handlesubmit = async (e)=>{
        e.preventDefault();
       
        const email = e.target[0].value;
        const password = e.target[1].value;
    
    try{
    
      await signInWithEmailAndPassword(auth, email, password);
      if(email == "kavya3904@gmail.com")
      {
        navigate("/hometwo")
      }
      else{
        navigate("/home")
      }
      
        
  
    }catch(err) {
      setErr(true);
    }
    
    
      }
    
  
  
  
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Login</span>
        
          <form onSubmit={handlesubmit} >
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button >Sign in</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>You don't have an account? <Link className="reg-login-link" to="/register">Register</Link></p>
        </div>
      </div>
    );
  };
  
  export default Login;