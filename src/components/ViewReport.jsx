import React from "react";
import "./ViewReport.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Books Issued", value: 45 },
  { name: "Books Returned", value: 30 },
  { name: "Pending Books", value: 15 },
  { name: "Fines Collected", value: 10 },
];

const COLORS = ["#0077cc", "#00cc99", "#ff9933", "#ff4444"];

const ViewReports = () => {
  return (
    <div className="reports-container">
      <h2 className="reports-title">📊 Library Reports</h2>
      <p className="reports-subtitle">
        Overview of library activity and statistics.
      </p>

      {/* Summary Stats */}
      <div className="reports-stats">
        <div className="stat-box">
          <h3>📚 120</h3>
          <p>Total Books</p>
        </div>
        <div className="stat-box">
          <h3>👤 35</h3>
          <p>Total Users</p>
        </div>
        <div className="stat-box">
          <h3>💰 ₹1200</h3>
          <p>Fines Collected</p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="reports-graphs">
        {/* Bar Chart */}
        <div className="chart-box">
          <h3>📊 Activity Bar Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0077cc" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h3>🥧 Activity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ViewReports;
