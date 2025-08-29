import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

export default function Login(){
  return (
    <>
        <div class="login-container">
        <h1>Library Management System</h1>
        <form action="#" method="post">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>

            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>

            <button type="submit" class="btn">Login</button>
            <p class="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
    </div>
    </>
  );
}
