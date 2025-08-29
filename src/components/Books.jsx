import React, { useState } from "react";
import DateSet from "./DateSet";
import "../App.css";
import { Link } from "react-router-dom";

export default function Books() {
  const [checkIn, setCheckIn] = useState(true);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <h1>Librix</h1>
          <ul>
            <li><Link to="/Check">📗 Check-in / out</Link></li>
            <li><b><Link to="/books">📚  Books</Link></b></li>
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

        
        
      </div>
    </div>
  );
}