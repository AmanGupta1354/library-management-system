import First from './CheckInOut.jsx';
import Books from './Books.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
return(
  <>
     <Router>
      <Routes>
        <Route path="/Check" element={<First />} />
        <Route path="/books" element={<Books />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/seach" element={<Search/>} />
        <Route path="/fine" element={<Fine />} />
      </Routes>
    </Router>
  </>
);

}

export default App;