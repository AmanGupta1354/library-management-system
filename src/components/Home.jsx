import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate=useNavigate();
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-card">
        <h1>📚 Welcome to Librix</h1>
        <p>
          Your smart library management system. <br />
          Manage books, users, and transactions with ease.
        </p>
      </div>

      {/* Quick Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <h2>📗 120</h2>
          <p>Books Available</p>
        </div>
        <div className="stat-card">
          <h2>👥 45</h2>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <h2>🔄 30</h2>
          <p>Books Issued</p>
        </div>
        <div className="stat-card" onClick={()=>navigate("/fine")}>
          <h2> ₹225</h2>
          <p>Pending Fines</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button onClick={()=>navigate("/home/addbooks")}>➕ Add New Book</button>
        <button onClick={()=>navigate("/home/adduser")}>👤 Add User</button>
        <button onClick={()=>navigate("/home/searchbook")}>🔍 Search Books</button>
      </div>
    </div>
  );
}

export default Home;
