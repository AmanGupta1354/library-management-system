import React, { useState } from "react";
import "./Users.css";
import { useNavigate } from "react-router-dom";

export default function User() {

  const navigate=useNavigate();
  const [users] = useState([
    {
      userId: "U001",
      fullName: "Aman Gupta",
      email: "aman@example.com",
      phone: "9876543210",
      address: "Delhi, India",
      role: "Student",
      membership: "Active",
      joinDate: "2024-05-10",
    },
    {
      userId: "U002",
      fullName: "Riya Sharma",
      email: "riya@example.com",
      phone: "9123456789",
      address: "Mumbai, India",
      role: "Teacher",
      membership: "Active",
      joinDate: "2023-12-01",
    },
    {
      userId: "U003",
      fullName: "Arjun Mehta",
      email: "arjun@example.com",
      phone: "9988776655",
      address: "Bangalore, India",
      role: "Librarian",
      membership: "Suspended",
      joinDate: "2022-08-15",
    },
  ]);

  return (
    <div className="user-container">
      <h2>📋 Existing Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Membership</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              <td>{u.userId}</td>
              <td>{u.fullName}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.role}</td>
              <td
                className={
                  u.membership === "Active"
                    ? "status-active"
                    : u.membership === "Expired"
                    ? "status-expired"
                    : "status-suspended"
                }
              >
                {u.membership}
              </td>
              <td>{u.joinDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
          <br></br>
      <button type="submit" className="submit-btn" onClick={()=>navigate("/home/adduser")}>➕ Add User</button>
    </div>
  );
}
