import React, { useState } from "react";
import DateSet from "./DateSet";
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
          <span><DateSet></DateSet></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">

        {/* User profile */}

        <div className="card">
          <div className="card-header">
            <p>CHECK-IN</p>
            <input type="checkbox" checked={checkIn} onChange={() => setCheckIn(!checkIn)} />
            <p>CHECK-OUT</p>
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