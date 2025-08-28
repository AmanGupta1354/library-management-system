import React, { useState } from "react";
import DateSet from "./DateSet";
import "./App.css";
import { Link } from "react-router-dom";

export default function Fine() {
  const [checkIn, setCheckIn] = useState(true);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <h1>Librix</h1>
          <ul>
            <li><Link to="/Check">📗 Check-in / out</Link></li>
            <li><Link to="/books">📚  Books</Link></li>
            <li><Link to="/books">👥 Users</Link></li>
            <li><Link to="/books">🛠️ Admin</Link></li>
            <li><Link to="/books">🔍 Search</Link></li>
            <li><b><Link to="/fine">💲 Fine</Link></b></li>
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