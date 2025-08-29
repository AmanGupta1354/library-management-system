import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CheckInOut from "./components/CheckInOut";
import Books from "./components/Books";
import Users from "./components/Users";
import Admin from "./components/Admin";
import Search from "./components/Search";
import Fine from "./components/Fine";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/checkinout" element={<CheckInOut />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/search" element={<Search />} />
          <Route path="/fine" element={<Fine />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
