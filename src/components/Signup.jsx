import React from 'react'
import "./Signup.css"
import logo from "../assets/study.png"
import { useNavigate,Link } from 'react-router-dom';

export default function Signup (){

    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add real login validation here if needed
    navigate("/home"); // redirect to home after login
  }; 

  return (
    
    <>
        <div className="container">
        
        <div className="illustration">
            <img src={logo} alt="Mobile app illustration" />
        </div>
        <div className="form-container">
            <h2>REGISTER</h2>
            <p>Enter your information to register</p>

            <form onSubmit={handleLogin} method="post">
                <div className="row">
                    <div className="input-group">
                        <label className="action" >First name</label>
                        <input type="text" id="firstName" placeholder="First Name" />
                    </div>

                    <div className="input-group">
                        <label className="action" >Last name</label>
                        <input type="text" id="lastName" placeholder="Last Name" />
                    </div>
                </div>

                <div className="input-group">
                    <label  className="action">Class</label>
                    <input type="text" id="class-study" placeholder="eg. 8,9,10" />
                </div>

                <div className="input-group">
                    <label   className="action">Email</label>
                    <input type="email" id="email" placeholder="abc123@example.com" />
                </div>

                <div className="input-group">
                    <label  className="action">Password</label>
                    <input type="password" id="password" placeholder="************" />
                </div>

               <button type="submit" className="btn">REGISTER NOW</button>
            </form>
        </div>
    </div>

    </>
  );
}
