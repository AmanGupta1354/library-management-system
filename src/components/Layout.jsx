import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import DateSet from "./DateSet";

function Layout() {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">📚 Librix</h2>
        
        <div className="menu">
          <details open>
            <summary>📗 Transactions</summary>
            <ul>
              <li><Link to="/checkinout">Check-in / out</Link></li>
              <li><Link to="/fine">Fines</Link></li>
            </ul>
          </details>

          <details>
            <summary>📚 Library</summary>
            <ul>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/search">Search</Link></li>
            </ul>
          </details>

          <details>
            <summary>⚙️ Management</summary>
            <ul>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </details>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-bottom">
          <span>⚙️</span>
          <span>🔗</span><br></br>
          <DateSet />
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
