import "./Home.css";

function Home() {
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
        <div className="stat-card">
          <h2>💲 12</h2>
          <p>Pending Fines</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button>➕ Add New Book</button>
        <button>👤 Add User</button>
        <button>🔍 Search Books</button>
      </div>
    </div>
  );
}

export default Home;
