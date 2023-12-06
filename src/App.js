import './assets/styles/App.css';
import "./assets/styles/reset.css"
import './assets/styles/main.scss';
import Inner from './pages/Inner';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inner" element={<Inner />} />
      </Routes>
    </Router>
      
  );
}


export default App;
