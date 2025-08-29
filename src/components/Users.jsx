import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";

// ✅ Import all components (case-sensitive)
import CheckInOut from "./CheckInOut";
import Books from "./Books";
import Users from "./Users";
import Admin from "./Admin";
import Search from "./Search";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li><a href="/checkinout">Check In/Out</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="/search">Search</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/checkinout" element={<CheckInOut />} />
            <Route path="/books" element={<Books />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<h1>Welcome to Library Management System</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
