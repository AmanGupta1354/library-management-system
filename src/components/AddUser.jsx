import React, { useState } from "react";
import "./AddUser.css";

export default function User() {
  const [user, setUser] = useState({
    userId: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    role: "Student",
    membership: "Active",
    joinDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Added:", user);
    alert("✅ User successfully added!");
    setUser({
      userId: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      role: "Student",
      membership: "Active",
      joinDate: "",
    });
  };

  return (
    <div className="user-container">
      <h2>Add New User</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            name="userId"
            value={user.userId}
            onChange={handleChange}
            placeholder="Enter unique user ID"
            required
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Enter full address"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select name="role" value={user.role} onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Librarian">Librarian</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label>Membership Status</label>
          <select name="membership" value={user.membership} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>

        <div className="form-group">
          <label>Join Date</label>
          <input
            type="date"
            name="joinDate"
            value={user.joinDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">➕ Add User</button>
      </form>
    </div>
  );
}
