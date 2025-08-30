import React, { useState } from "react";
import "./Fine.css";

const Fines = () => {
  const [fines, setFines] = useState([
    { id: 1, userId: "U101", name: "Aarav Gupta", contact: "9876543210", book: "React Basics", amount: 50 },
    { id: 2, userId: "U102", name: "Riya Sharma", contact: "9123456789", book: "Java Programming", amount: 100 },
    { id: 3, userId: "U103", name: "Karan Mehta", contact: "9988776655", book: "Python Essentials", amount: 75 },
  ]);

  return (
    <div className="fines-container">
      <h2>📑 Pending Fines</h2>
      <table className="fines-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Book</th>
            <th>Fine Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {fines.map((fine) => (
            <tr key={fine.id}>
              <td>{fine.userId}</td>
              <td>{fine.name}</td>
              <td>{fine.contact}</td>
              <td>{fine.book}</td>
              <td className="amount">₹{fine.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fines;
