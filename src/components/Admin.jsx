import React from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navi=useNavigate();
  return (
    <div className="admin-container">
      <h2 className="admin-title">🛡️ Admin Dashboard</h2>
      <p className="admin-subtitle">
        Welcome Admin! Here you can monitor and manage your library system.
      </p>

      {/* Quick Stats */}
      <div className="admin-stats">
        <div className="stat-card">
          <h3>📚 120</h3>
          <p>Total Books</p>
        </div>
        <div className="stat-card">
          <h3>👤 35</h3>
          <p>Registered Users</p>
        </div>
        <div className="stat-card">
          <h3>💰 12</h3>
          <p>Pending Fines</p>
        </div>
      </div>

      {/* Actions */}
      <div className="admin-actions">
        <button className="admin-btn">👤 Manage Users</button>
        <button className="admin-btn">📚 Manage Books</button>
        <button className="admin-btn">💰 Manage Fines</button>
        <button className="admin-btn" onClick={()=> navi("/admin/viewreport")}>📊 View Reports</button>
        <button className="admin-btn">⚙️ Library Settings</button>
      </div>
    </div>
  );
};

export default Admin;
