import React, { useState } from "react";
import "./app.css";

export default function First() {
  const [checkIn, setCheckIn] = useState(true);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <h1>Librix</h1>
          <ul>
            <li><b>📗 Check-in / out</b></li>
            <li>📚 Books</li>
            <li>👥 Users</li>
            <li>🛠️ Admin</li>
            <li>🔍 Search</li>
            <li>💲 Fine</li>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <span>⚙️</span>
          <span>🔗</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Date and Time */}
        <div className="date-box">
          <p className="month">JUL</p>
          <p className="day">17</p>
          <p className="small">July 17, 2023</p>
          <p className="small">4:37 pm</p>
        </div>

        {/* User profile */}
        <div className="profile-pic">
          <img src="https://via.placeholder.com/150" alt="profile" />
        </div>

        <div className="card">
          <div className="card-header">
            <span>CHECK-IN</span>
            <input type="checkbox" checked={checkIn} onChange={() => setCheckIn(!checkIn)} />
            <span>CHECK-OUT</span>
          </div>

          {/* Form */}
          <form className="form">
            <label>User ID : <input type="text" placeholder="Enter User ID" /></label>
            <label>User Name : <input type="text" placeholder="Enter User Name" /></label>
            <label>Book ID : <input type="text" placeholder="Enter Book ID" /></label>
            <label>Book Name : <input type="text" placeholder="Enter Book Name" /></label>
            <label>Publisher : <input type="text" placeholder="Enter Publisher" /></label>

            <div className="row">
              <label>Date : <input type="text" placeholder="dd/mm/yyyy" /></label>
              <label>Return : <input type="text" placeholder="dd/mm/yyyy" /></label>
            </div>

            <label>Book Condition : <textarea placeholder="Please mention the book condition, damages (if any)..." /></label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}