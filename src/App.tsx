import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Wallet from "./components/Wallet/Wallet";
import Header from "./components/Header";
import FlightDetails from "./components/Flights/FlightDetails";
import { UserContext} from "./context/UserContext";


const App: React.FC = () => {
  return (
    <UserContext.Provider value={{ user: null, setUser: () => {} }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flights/:id" element={<FlightDetails />} /> 
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
