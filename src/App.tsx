import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Wallet from "./components/Wallet/Wallet";


const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/flights">Flights</Link> |
        <Link to="/wallet">Wallet</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
};

export default App;
