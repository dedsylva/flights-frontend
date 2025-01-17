import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Wallet from "./components/Wallet/Wallet";
import Header from "./components/Header";


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
};

export default App;
