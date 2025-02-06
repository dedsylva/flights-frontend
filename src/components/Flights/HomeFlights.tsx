import React, { useState, useEffect } from "react";
import { Flight } from "../../models/Flight";
import { fetchAvailableFlights } from "../../services/flightApiService";
import './HomeFlights.scss';
import FlightCell from "./FlightCell";
import EmptyTable from "../../utils/EmptyTable";


const HomeFlights: React.FC = () => {

  const [Flights, setFlights] = useState<Flight[]>([]); // Array of Flight objects
  const [error, setError] = useState<string | null>(null); // Error message or null

  const getFlights = async () => {
    console.log("Fetching Data");
    try {
        const userData = await fetchAvailableFlights();
        setFlights(userData); 
        setError(null);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching flights:", err.message);
      }
  };


  useEffect(() => {
      getFlights();
    }, []);

  return (
    <div className="home-flight-container">
      <h2 className="title-flights-available">Flights Available</h2>
      <hr className="hr"/>

      {error && <p style={{ color: "red" }}>{error}</p>} 
      <div className="home-flight-cell-container">
        {Flights.length > 0 ? (
          Flights.map((Flight, _) => ( 
            <FlightCell Flight={Flight} />
          ))
        ) : (
            <EmptyTable text={"No Flights Available"}/>
        )}
      </div>
    </div>
  );

}

export default HomeFlights;